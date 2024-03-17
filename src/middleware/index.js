export const CustomMiddleware = (req, res, next) => {
  console.log("Middleware ");
  next();
};
