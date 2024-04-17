import { QRModel } from "../model/QR.js"
import { QRGenerator } from "../utils/helper/qr_generate.js"
import { converBase64ToImage } from 'convert-base64-to-image'
import requestIp from 'request-ip'


const port = process.env.PORT || 3000
const domain = `http://localhost:${port}/images/`

const generateQr = async (req,res,next)=> {


   try {  

    const {original_link,name} = req.body 
    if(original_link) {


        const base64_image = await  QRGenerator(original_link)
        const fileName = Date.now().toString() +"-" + name.split('')[1]
        converBase64ToImage(base64_image, `public/images/${fileName}.png`)
        const data = {
            ...req.body,
            qr_link : domain + fileName.trim()+".png"
        }



        await QRModel.create(data)
       return res.status(200).json({
        statusCode:200,
        message:"successfully generated",
        data
       })
    }  
  
   } catch (error) {
      return next(error)
   }


}

const getQrCode = async  (req,res,next)=> {
    try {  

          const query = await QRModel.find({})
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

const getSingleQrCode = async  (req,res,next)=> {
    try {  

          const query = await QRModel.findById(req.params.id)
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

const deleteQr = async (req,res,next)=> {
    res.status(200).json("Welcome back")
}


export default {generateQr, getQrCode,deleteQr,getSingleQrCode}