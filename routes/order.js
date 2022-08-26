const router = require("express").Router();
const CryptoJS = require("crypto-js");
const Order = require("../models/Order");
const { verfyTokenAndAuthorization, verifyToken , verfyTokenAndAdmin } = require("./verifyToken")

//CREATE

router.post("/", verifyToken ,async (req,res)=>{
    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
})


//UPDATE
router.put("/:id", verfyTokenAndAuthorization, async (req,res)=>{
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set : req.body
        },
        { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
});

//DElETE 


router.delete("/:id", verfyTokenAndAdmin , async (req,res)=>{
    try {
        await Order.findByIdAndDelete(req.params.id)

        res.status(200).json("Order has been deleted");   
    } catch (error) {
        res.send(500).json(error);
    }
})

//GET USER Order

router.get("/find/:userId" ,verifyToken, async (req,res)=>{
    try {
        const orders = await Order.findOne( {userId: req.params.userId} )
        res.status(200).json(orders); 
    } catch (error) {
        res.send(500).json(error);
    }
})
//GET Seller Orders

router.get("/find/:sellerId" ,verifyToken, async (req,res)=>{
    try {
        const orders = await Order.findOne( {sellerId: req.params.sellerId} )
        res.status(200).json(orders); 
    } catch (error) {
        res.send(500).json(error);
    }
})

//GET ALL 

router.get("/" ,verfyTokenAndAuthorization, async (req,res)=>{

    try {
        const Orders = await Order.find();
        res.status(200).json(Orders);
    } catch (error) {
        res.status(500).json(error)        
    }

})

// GET MONTHLY INCOME

router.get("/income", verfyTokenAndAdmin , async (req,res)=>{

    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(date.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            { $match: {createdAt : {$gte : previousMonth} } },

            {
                $project : {
                    months : { $month : "$createdAt" },
                    sales : "$amount",    
                }
            },
            {
                $group : {
                    _id : "$month",
                    total : { $sum : "$sales" },
                },
            },

        ]);
        res.status(200).json(income);
    } catch (error) {
        res.status(500).json(error)
    }

})


module.exports = router;