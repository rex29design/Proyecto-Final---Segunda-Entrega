const ProductController = require("../controllers/ProductContenedor")

const express = require("express")

const router = express.Router()

router.post("/", ProductController.saveProduct)

router.get("/:id", ProductController.getOne)

router.get("/", ProductController.getAll)

router.put("/:id", ProductController.updateProduct)

router.delete("/:id", ProductController.delProduct)


module.exports = router