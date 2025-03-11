let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let addstudentSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: [true, 'User Id is required please Enter User Id'] },
    name: { type: String, required: [true, 'Name is required please Enter Name'] },
    email: { type: String, required: [true, 'Email is required please Enter Email-Id'], unique: true },
    city: { type: String, required: [true, 'City is required please Enter City'] },
    phonenumber: { type: String, required: [true, 'Phone is required please Enter Phone Number'] },
    education: { type: String, required: [true, 'Education is required please Enter Education'] },
    experience: { type: String, required: [true, 'Experience is required please Enter Experience'] },
    resume: { type: String, required: [true, 'Resume is required please Upload Resume'] },
    skills: { type: String, required: [true, 'Skills is required please Enter Skills'] },
    created_at: { type: Date, default: Date.now },
});

    ADDSTUDENT = mongoose.model('addstudent', addstudentSchema);
    module.exports = ADDSTUDENT;