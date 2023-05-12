const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "It must have a title!"],
            unique: true
        },
        author : {
            type: String,
            default: "Anonymous"
        },
        price: {
            type:Number,
            required:true
        }
    }, 
    {
        timestamps: true
    }
)
const Books = mongoose.model("books", booksSchema);
module.exports = Books;
 


// module.exports = [
//     {
//         title: "The outsiders",
//         author: "S.E. Hinton",
//         price: 5.99
//     }, {
//         title: "Odd Thomas",
//         author: "Dean Koontz",
//         price: 8.99
//     }, {
//         title: "The Four Agreements",
//         author: "Don Miguel Ruiz",
//         price: 4.99
//     }, {
//         title: "Wild",
//         author: "Cheryl Strayed",
//         price: 19.99
//     }
// ]