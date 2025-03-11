let SCHEDULE = require('../model/interviewschedule')

exports.schedulecreate = async (req, res, next) => {

    try {
        let { userId, name, email, phonenumber, interviewdate, interviewtime } = req.body;
        let scheduledata = await SCHEDULE.create({
            userId,
            name,
            email,
            phonenumber,
            interviewdate,
            interviewtime
        });

        res.status(201).json({
            status: "success",
            message: "Interview schedule created successfully",
            scheduledata
        })
    } catch (error) {
        res.status(404).json({
            status: "failed",
            message: "Error while creating interview schedule",
            error: error.message,
        })
    }
}

exports.scheduleread = async (req, res, next) => {

    try {

        let scheduledata = await SCHEDULE.find().populate('userId');
        res.status(200).json({
            status: "success",
            message: "Interview schedule read successfully",
            scheduledata
        })

    } catch (error) {
        res.status(401), json({
            status: "failed",
            message: "Error while reading interview schedule",
            error: error.message
        })
    }

}

exports.scheduleupdate = async (req, res, next) => {

    try {
        let { id } = req.params;
        let scheduledata = await SCHEDULE.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json({
            status: "success",
            message: "Interview schedule updated successfully",
            scheduledata
        })
    } catch (error) {
        res.status(404).json({
            status: "failed",
            message: "Error while updating interview schedule",
            error: error.message
        })
    }

}

exports.scheduledelete = async (req, res, next) => {

        await SCHEDULE.findByIdAndDelete(req.params.id);

    try {
        res.status(200).json({
            status: "success",
            message: "Interview schedule deleted successfully"
        })
    } catch (error) {
        res.status(404).json({
            status: "failed",
            message: "Error while deleting interview schedule",
            error: error.message
        })
    }

}
