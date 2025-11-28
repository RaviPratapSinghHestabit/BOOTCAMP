const router = require("express").Router();
const controller = require("../controllers/product.controller");

router.post("/", controller.createProduct);
router.get("/:id", controller.getProduct);
router.get("/", controller.getProductsPaginated);
router.delete("/:id", controller.deleteProduct);

module.exports = router;
