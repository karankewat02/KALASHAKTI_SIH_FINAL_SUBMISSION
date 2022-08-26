const router = require("express").Router();
const CryptoJS = require("crypto-js");
const Wishlist = require("../models/Wishlist");
const { verfyTokenAndAuthorization, verifyToken , verfyTokenAndAdmin } = require("./verifyToken")

//CREATE

router.post("/", verifyToken ,async (req,res)=>{
    const newWishlist = new Wishlist(req.body)

    try {
        const savedWishlist = await newWishlist.save();
        res.status(200).json(savedWishlist)
    } catch (error) {
        res.status(500).json(error)
    }
})
//UPDATE
router.put("/:id", verifyToken, async (req,res)=>{
    try {
        const updatedWishlist = await Wishlist.findByIdAndUpdate(req.params.id,{
            $set : req.body
        },
        { new: true }
        );
        res.status(200).json(updatedWishlist);
    } catch (error) {
        res.status(500).json(error);
    }
});