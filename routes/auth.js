const router = require("express").Router();
const User = require("../models/User");
const CryptoJS =require("crypto-js");
const jwt = require("jsonwebtoken");


//Register 

router.post("/register",async (req,res)=>{
    const newUser = new User({
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC.toString()),
        userType: req.body.userType,
        name: req.body.name,
        pno: req.body.pno,
    });

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err){
        res.status(500).json(err);
    }
})

//Login
router.post("/login", async (req,res)=>{
    try {
        const user = await User.findOne({email: req.body.email});

        if(!user){
            res.status(401).json("Wrong Email !") ;
        }else{        
            const hashpassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);    
        const originalPassword = hashpassword.toString(CryptoJS.enc.Utf8);
        
        if(originalPassword !== req.body.password){
            res.status(401).json("Wrong Password !");
        }else{  
            const accessToken = jwt.sign({
                id: user.id,
                isAdmin : user.isAdmin,
                userType: user.userType,
            }, process.env.JWT_SEC, {expiresIn:"3d"})
            
            const {password, ...others} = user._doc;
            
            res.status(200).json({others,accessToken});
        } 
    }

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;