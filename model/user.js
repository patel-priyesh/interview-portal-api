let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: { type: String, required: [true, 'Name is required please Enter Name'] },
    email: { type: String, required: [true, 'Email is required please Enter Email-Id'], unique: true },
    password: { type: String, required: [true, 'Password is required please Enter Your Password'] },
});

    USER = mongoose.model('user', userSchema);
    module.exports = USER;