const express  = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")
const bodyParser = require("body-parser")


const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const wishlistRoute = require("./routes/wishlist");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/paymentGateway");
const mailRoute = require("./routes/mail")

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("Db Connetion succesfull !"))
    .catch((err)=>{console.log(err)});


    app.use(cors());
    app.use(bodyParser());
    app.use(express.json());
    app.use("/api/user", userRoute);
    app.use("/api/auth", authRoute);
    app.use("/api/products", productRoute);
    app.use("/api/cart", cartRoute);
    // app.use("/api/wishlist", wishlistRoute);
    app.use("/api/order", orderRoute);
    app.use("/api/checkout", stripeRoute);
    app.use("/api/mail",mailRoute)
app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backen server running");
})