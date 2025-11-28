const router = require("express").Router();
const controller = require("../controllers/user.controller");

router.post("/", controller.createUser);
router.get("/:id", controller.getUser);
router.get("/", controller.getUsersPaginated);

module.exports = router;
