let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let interviewscheduleSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: [true, 'User Id is required please Enter User Id'] },
    name: { type: String, required: [true, 'Name is required please Enter Name'] },
    email: { type: String, required: [true, 'Email is required please Enter Email-Id'], unique: true },
    phonenumber: { type: String, required: [true, 'Phone is required please Enter Phone Number'] },
    interviewdate: { type: String, required: [true, 'Interview Date is required please Enter Interview Date'] },
    interviewtime: { type: String, required: [true, 'Interview Time is required please Enter Interview Time'] },
    created_at: { type: Date, default: Date.now },
});

let INTERVIEW = mongoose.model('interviewschedule', interviewscheduleSchema);
module.exports = INTERVIEW;