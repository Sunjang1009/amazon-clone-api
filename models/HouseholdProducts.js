const mongoose = require('mongoose');
const householdProductsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter name"],
            unique: true
        },
        brand: {
            type: String,
            required: [true, "Please enter brand"]
        },
        price: {
            type:Number
        }
    },{
        timestamps: true
    }
)

const HouseholdProducts = mongoose.model('HouseholdProducts', householdProductsSchema);
module.exports = HouseholdProducts;

// module.exports = [
//     {
//         name: "Paper towels",
//         brand: "Bounty",
//         price: 3.99,
//         description: "They're paper towels. How do you not know what those are?"
//     }, {
//         name: "Sponges",
//         brand: "square pants",
//         price: 5.99,
//         description: "Set of 12 sponges"
//     }, {
//         name: "Squatty potty",
//         brand: "Squatty",
//         price: 39.99,
//         description: "How long do you really want to keep changing diapers for?"
//     }
// ]