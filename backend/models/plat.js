const mongoose = require("mongoose");
const platSchema = mongoose.Schema({
    Name: String,
    description: String,
    price: Number,

})

const plat = mongoose.model("Plat", platSchema);

module.exports = plat;