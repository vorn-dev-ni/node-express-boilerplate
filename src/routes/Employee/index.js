import express from "express";
import EmployeeController from "../../controllers/EmployeeController.js";
import { isValidObjectId } from "mongoose";
export const EmployeeRouter = express.Router()


EmployeeRouter.route('/').get(EmployeeController.getEmployees)
.post(EmployeeController.createEmployees)

EmployeeRouter.param('id',(req,res,next,value)=> {
    if(!isValidObjectId(value)) {
        return res.status(400).json({
            statusCode:400,
            message:value+" is not a valid id "
        })
    }
    return next()

})
EmployeeRouter.route('/:id').get(EmployeeController.getSingleEmployees)
