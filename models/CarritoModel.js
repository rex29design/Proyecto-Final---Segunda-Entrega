const mongoose = require("mongoose")
const Schema = mongoose.Schema

const carritoSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
    price: { type: Number, required: true },
    description: { type: String, required: true},
    url: { type: String, required: true },
},
{
    excludeIndexes: true,
}
)


module.exports = Carrito = mongoose.model("Carrito", carritoSchema)