const router = require("express").Router();
const CryptoJS = require("crypto-js");
const User = require("../models/User");
const { verfyTokenAndAuthorization, verifyToken , verfyTokenAndAdmin } = require("./verifyToken")

//UPDATE
router.put("/:id", verifyToken, async (req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set : req.body
        },
        { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

//DElETE 

router.delete("/:id", verfyTokenAndAuthorization , async (req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)

        res.status(200).json("user has been deleted");   
    } catch (error) {
        res.send(500).json(error);
    }
})

//GET USER

router.get("/find/:id", verfyTokenAndAdmin , async (req,res)=>{
    try {
        const user = await User.findById(req.params.id)

        const {password, ...others} = user._doc;
        res.status(200).json(others); 
    } catch (error) {
        res.send(500).json(error);
    }
})

//GET ALL USERS

router.get("/", verfyTokenAndAdmin , async (req,res)=>{
    const query = req.query.new; 
    try {
        const users = query
        ? await User.find().sort({ _id : -1 }).limit(5) 
        : await User.find();
        res.status(200).json(users); 
    } catch (error) {
        res.send(500).json(error);
    }
})

//GET USER STATS

router.get("/stats",verfyTokenAndAdmin, async (req,res)=>{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt : { $gte : lastYear } } },
            {
                $project : {
                    month : { $month : "$createdAt" },
                }
            },
            {
                $group : {
                    _id: "$month",
                    total : { $sum: 1 },
                }
            }
        ])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;