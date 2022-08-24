const express = require("express")
const mongoose = require("mongoose")
const db = require("./config")
const Productos = require("./routes/ProductoDao")
const Carrito = require("./routes/CarritoDao")




const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//=======================//

app.use("/api/products", Productos)

app.use("/api/carrito", Carrito)

//=======================//

app.listen(8080, () => {
    console.log("Server listening...");
    db();
})