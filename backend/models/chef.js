const mongoose = require("mongoose");
const chefSchema = mongoose.Schema({
    Name: String,
    Experience: Number,
    Speciality: String
})
const chef = mongoose.model("Chef", chefSchema);
module.exports = chef;