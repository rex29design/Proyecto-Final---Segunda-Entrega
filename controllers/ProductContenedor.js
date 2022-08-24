const mongoose = require("mongoose")
const Product = require("../models/ProductModel")

const saveProduct = async(req, res) => {
    try {
        let product = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            url: req.body.url
        })
        await product.save()
        res.json({product})

    } catch (err) {console.log(err)}

}

const getAll = async(req, res) => {
    try {
        const productos = await Product.find()
        res.json(productos)

    } catch (err) {console.log(err)}
}

const getOne = async(req, res) => {
    try {
        products = await Product.findById(req.params.id)
        res.json({products})

    }catch (err) {console.log(err)}
}

const updateProduct = async(req, res) => {
    try {
        const { id } = req.params
        await Product.updateOne({_id: id}, req.body)
        res.json("Producto actualizado correctamente")
    }catch(err) {console.log(err)}
}

const delProduct = async(req, res) => {
    try {
        const { id } = req.params
        await Product.deleteOne({_id: id})
        res.json("Producto eliminado")
    }catch(err){console.log(err)}

}


module.exports = {saveProduct, getAll, getOne, updateProduct, delProduct}

