
const CarritoController = require("../controllers/CarritoContenedor")
const express = require("express")

const router = express.Router()

router.post("/add", CarritoController.addProdToCarrito)

router.get("/", CarritoController.getCarrito)

router.delete("/:id", CarritoController.delCarrito)


module.exports = router