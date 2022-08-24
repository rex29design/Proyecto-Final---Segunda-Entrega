const mongoose = require("mongoose")
const Carrito = require("../models/CarritoModel")
const Product = require("../models/ProductModel")

const addProdToCarrito = async(req, res) => {
    try {
     const carrito_obj = new Carrito({
         name: req.body.name,
         price: req.body.price,
         description: req.body.description,
         url: req.body.url
     })
     const carritoData = await carrito_obj.save()
     res.status(200).send({success:true, msg:"Cart Product detail", data:carritoData})
 
    } catch (err) {
 
     res.status(400).send({success:false, msg:err.message})
    }
     
}

const getCarrito = async(req, res) => {
    try {
        const carrito = await Carrito.find()
        res.json(carrito)
    } catch (err) {console.log(err)}
}

const delCarrito = async(req, res) => {
    try {
        const {id} = req.params
        await Carrito.deleteOne({_id: id})
        res.json("Producto eliminado del carrito")

    } catch (err) {console.log(err)}
}

module.exports = {getCarrito, delCarrito, addProdToCarrito}