import express from "express";
import QrController from "../../controllers/QrController.js";
import { isValidObjectId } from "mongoose";
export const qrRouter = express.Router()


qrRouter.route('/').get(QrController.getQrCode)
.post(QrController.generateQr)

qrRouter.param('id',(req,res,next,value)=> {
    if(!isValidObjectId(value)) {
        return res.status(400).json({
            statusCode:400,
            message:value+" is not a valid id "
        })
    }
    return next()

})
qrRouter.route('/:id').get(QrController.getSingleQrCode)
