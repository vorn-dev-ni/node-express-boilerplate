import ApiResponse from "../model/ApiResponse.js";
import { BlogModal } from "../model/Blog.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/blogs");
  },
  filename: (req, file, cb) => {
    const filename =
      Date.now() + "-" + Math.floor(Math.random() * 9) + file.originalname;

    console.log(file.mimetype);
    cb(null, filename);
  },
});
const filters = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new ApiResponse("Invalid File Extension", "InvalidType", 400), false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: filters,
});
const uploadMultiImage = upload.array("images");

const postBlog = async (req, res, next) => {
  console.log(req.files);
  const images = [];
  let filterBody = {};
  if (req.files.length > 0) {
    req.files.forEach((image, index) => {
      images.push(image.filename);
    });
    filterBody = {
      title: req.body.title,
      images: images,
    };
  } else {
    filterBody = {
      title: req.body.title,
    };
  }

  const result = await BlogModal.create(filterBody);

  return res.status(200).json({
    data: req.body,
  });
};

export default { postBlog, uploadMultiImage };
