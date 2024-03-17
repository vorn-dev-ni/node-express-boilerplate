import app from "./src/app.js"
import 'dotenv/config'
const port = 8080;
const server = app.listen(port, () => {
  console.log("Server is listen on port", port);
});
server.on("close", () => {
  console.log("server has closed");
});

