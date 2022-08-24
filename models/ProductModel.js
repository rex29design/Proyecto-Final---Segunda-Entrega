const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    description: { type: String, required: true},
    url: { type: String, required: true },
    inCart: {type: Boolean, default: false}
},
{
    
}
)



module.exports = Product = mongoose.model("Product", productSchema)