let USER = require("../model/user")
const bcrypt = require('bcrypt');

exports.usercreate = async (req, res, next) => {
    try {

        let { name, email, password } = req.body;

        let findemail = await USER.findOne({ email })
        if (findemail) throw new Error("Email-Id already exist");

        let hashedPassword = await bcrypt.hash(password, 10);

        let user = await USER.create({
            name,
            email,
            password: hashedPassword,
        })

        res.status(201).json({
            status: "Successfully",
            message: "user Created Successfully",
            userdata: user
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        });
    }
}

exports.userread = async (req, res, next) => {
    try {

        let user = await USER.find();

        res.status(200).json({
            status: "Successfully",
            message: "user Data read Successfully",
            userdata: user
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        });
    }
}

exports.userupdate = async (req, res, next) => {
    try {

        let id = req.params.id;
        let user = await USER.findById(id);
        if (!user) throw new Error("user not found");

        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        user = await USER.findByIdAndUpdate(id, req.body, { new: true })

        res.status(200).json({
            status: "Successfully",
            message: "user Updated Successfully",
            userdata: user
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        });
    }
}

exports.userdelete = async (req, res, next) => {
    try {

        let id = req.params.id;
        let user = await USER.findById(id);
        if (!user) throw new Error("user not found");

        await USER.findByIdAndDelete(id);

        res.status(200).json({
            status: "Successfully",
            message: "user Deleted Successfully",
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        });
    }
}