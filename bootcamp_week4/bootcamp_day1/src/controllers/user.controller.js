const UserRepository = require("../repositories/user.repository");

exports.createUser = async (req, res) => {
  try {
    const user = await UserRepository.create(req.body);
    const obj = user.toObject();
    delete obj.password;
    res.json(obj);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await UserRepository.findById(req.params.id);
    const obj = user.toObject();
    delete obj.password;
    res.json(obj);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUsersPaginated = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const users = await UserRepository.findPaginated(page, limit);

    const cleaned = users.map(u => {
      const obj = u.toObject();
      delete obj.password;
      return obj;
    });

    res.json(cleaned);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
