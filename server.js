const express = require("express")
const mongoose = require("mongoose")
const db = require("./config")
const Productos = require("./routes/ProductoDao")
const Carrito = require("./routes/CarritoDao")

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//=======================//

app.use("/api/products", Productos)

app.use("/api/carrito", Carrito)

//=======================//

const server = app.listen(PORT, () => {
    console.log(`Server listening [${PORT}]...`);
    db();
})
server.on("error", e => console.log("Error on server"));