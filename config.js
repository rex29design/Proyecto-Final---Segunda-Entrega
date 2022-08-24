const mongoose = require("mongoose")

const MONGO_URL = "mongodb://127.0.0.1/ecommerce"

const db = async () => {
    await mongoose
        .connect(MONGO_URL, {
            useNewUrlParser:true,
            useUnifiedTopology: true
        })
        .then(() => console.log("DB connected"))
        .catch(err => {console.log(err)})
}

module.exports = db