const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please provide a name"],
            unique: [true, "Must be original. Apparently you're not"]
        }, 
        password: {
            type: String,
            required: [true, "Please provide a password"]
        }, 
        email: {
            type: String,
            required: [true, "Please provide me with an email!"],
        }
    },
    {
        timestamps: true
    }
);

// mongoose.model(<mongodb collection name>, our schema)
const Users = mongoose.model('User', userSchema);

module.exports = Users;



