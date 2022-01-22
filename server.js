let express = require("express");
let app = express();
let handlers = require("./handlers");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", handlers.getHomepage);

app.get("/api/whoami", handlers.sendDetails);

app.listen(
  (process.env.PORT = 3000),
  console.log(`Server is listening on port ${process.env.PORT}`)
);
