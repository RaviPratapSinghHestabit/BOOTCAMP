const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "API working!" });
});

module.exports = router;
