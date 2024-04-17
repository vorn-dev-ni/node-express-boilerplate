import { converBase64ToImage } from "convert-base64-to-image"
import { EmployeeModel } from "../model/Employee.js"
import { QRGenerator } from "../utils/helper/qr_generate.js"


const port = process.env.PORT || 3000
const domain = `http://localhost:${port}/images/`

const createEmployees = async (req,res,next)=> {


   try {  


   const user = req.body 
     const base64_image = await  QRGenerator(JSON.stringify(user))
     const fileName = Date.now().toString() +"-" + user.fullname.split(' ')[0]
     converBase64ToImage(base64_image, `public/images/${fileName}.png`)
     const data = {
         ...req.body,
         qr_link : domain + fileName.trim()+".png"
     }
      await EmployeeModel.create(data)
       return res.status(200).json({
        statusCode:200,
        message:"successfully generated",
        data
       })

  
   } catch (error) {
      return next(error)
   }


}

const getEmployees = async  (req,res,next)=> {
    try {  

          const query = await EmployeeModel.find({})
          .select('-__v')
          
          .sort({_id:'desc'})

           return res.status(200).json({
            statusCode:200,
            data:query 
           })
     
      
       } catch (error) {
          return next(error)
       }
}

const getSingleEmployees = async  (req,res,next)=> {
    try {  

          const query = await EmployeeModel.findById(req.params.id)
          .select('-__v')
          
          .sort({_id:'desc'})

           return res.status(200).json({
            statusCode:200,
            data:query 
           })
     
      
       } catch (error) {
          return next(error)
       }
}




export default {createEmployees, getEmployees            ,getSingleEmployees}