import multer from "multer";
import ApiResponse from "../model/ApiResponse.js";
import {PhotoModal} from "../model/Photo.js";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + "." + file.mimetype.split("/")[1];

    cb(null, filename);
  },
});

const imageFilter = (req, file, cb) => {
  console.log(file);
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      new ApiResponse(
        "In correct file type must be png, jpg, jpeg",
        "InvalidFileType",
        400
      ),
      false
    );
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: imageFilter,
});





const uploadSingleImage = upload.single('image')


const saveImage = async (req, res, next) => {
  console.log("Image upload ");
  // PhotoModal.create({photo:req })


  await PhotoModal.create({photo:req.file})
  res.status(200).json(req.file);
};

export default { saveImage,uploadSingleImage };
