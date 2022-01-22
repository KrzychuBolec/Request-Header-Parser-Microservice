require("express");

let getHomepage = (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  console.log(req);
};

let sendDetails = (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.header("Accept-Language"),
    software: req.header("User-Agent"),
  });
};

module.exports = {
  getHomepage,
  sendDetails,
};
