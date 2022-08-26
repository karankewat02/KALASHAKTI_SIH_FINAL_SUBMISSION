const router = require("express").Router();
var nodemailer = require('nodemailer');
const { verfyTokenAndAuthorization, verifyToken , verfyTokenAndAdmin } = require("./verifyToken")

router.post("/" ,async (req,res)=>{
    let transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "nodemailer",
          pass: "xskyuexdrmjioged"
        }
     });
      
      var mailOptions = {
        from: 'nodemailer',
        to: req.body.userMailId,
        subject: req.body.subject,
        text: req.body.mailBody
      };
      
      transport.sendMail(mailOptions, function(error, info){
        if (error) {
          res.status(500).json(error);
        } else {
          res.status(200).json(info.response)
        }
      });
})

module.exports = router