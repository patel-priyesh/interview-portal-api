let STUDENT = require('../model/addstudent');
fs = require('fs');
path = require('path');

exports.studentcreate = async (req, res, next) => {
    try {

        let { userId,name, email, city, phonenumber, education, experience, skills } = req.body;

        let findemail = await STUDENT.findOne({ email })
        if (findemail) throw new Error("Email-Id already exist");

        let resume = req.file.path;
        let student = await STUDENT.create({
            userId,
            name,
            email,
            city,
            phonenumber,
            education,
            experience,
            resume,
            skills
        })

        res.status(201).json({
            status: "Successfully",
            message: "student Created Successfully",
            studentdata: student
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        });
    }
}

exports.studentread = async (req, res, next) => {
    try {

        let student = await STUDENT.find().populate('userId');

        res.status(200).json({
            status: "Successfully",
            message: "student Data read Successfully",
            studentdata: student
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        });
    }
}

exports.studentupdate = async (req, res, next) => {
    try {

        let id = req.params.id;
        let student = await STUDENT.findById(id);
        if (!student) throw new Error("student not found");

        if(req.file){
            if(student.resume){
                fs.unlinkSync(path.join(__dirname, './public/files', student.resume));
            }
            req.body.resume = req.file.path;
        }
         student = await STUDENT.findByIdAndUpdate(id,req.body, { new: true })

        res.status(200).json({
            status: "Successfully",
            message: "student Updated Successfully",
            studentdata: student
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        });
    }
}

exports.studentdelete = async (req, res, next) => {
    try {

        let id = req.params.id;
        let student = await STUDENT.findById(id);
        if (!student) throw new Error("student not found");

        await STUDENT.findByIdAndDelete(id);

        res.status(200).json({
            status: "Successfully",
            message: "student Deleted Successfully",
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        });
    }
}