import mongoose from "mongoose";


const EmployeeSchema = new mongoose.Schema({
    fullname:{
        type: String,
        trim: true,
        required: [true, 'fullname is required'],

    },
    jobtitle: {
        type: String,
        trim: true,
        required: [true, 'job title is required'],

    },
    status : {
        type: String,
        enum :['Full','Part'],
        default: 'Full'
    },
    salary :  {
        type: Number,
        max:[10000,'Salary must be less then 10000'],
        default: 250
    },
    qr_link : {
        type: String,
    },
   

    created_date: {
        type: Date,
        default: Date.now
    }
});

export const EmployeeModel = mongoose.model('Employees', EmployeeSchema);
