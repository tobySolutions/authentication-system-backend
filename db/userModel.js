const mongoose = require("mongoose");

/*

The users model tells the database how to store data that a user passes. 
The following steps will show you how to create a model for users:
 */

// assign constant UserSchema to the mongoose schema

const UserSchema = new mongoose.Schema({
    email: {
        // specify how the fields should work
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email"],
    },

    password: {
        type: String,
        required: [true,"Please provide a password!"],
        unique: false,
    },
});


// Create a user table or collection if there is no table with that name already
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
