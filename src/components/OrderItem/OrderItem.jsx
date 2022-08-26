import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Style from "./OrderItem.module.css";
import Context from "../../Context/Context";
import Loading from "../../Screens/Loading/Loading";

const axios = require("axios").default;
export default function OrderItem(props) {
  const [loggedInUserData, setLoggedInUserData] = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState({});
  const [productDetails, setProductDetail] = useState({});
  const [ItemQuantity, setItemQuantity] = useState(1);
  const [contextState, setContextState] = useState(true);
  useEffect(() => {
    setProductData(props.data);
    // console.log(productData);
    setItemQuantity(props.quantity);
    // console.log(props.data);
    // console.log(productData);
  }, []);
  // console.log(props.data);
  // console.log(productData);
  useEffect(() => {
    toast("Quantity Changed");
    if (productData.productId) {
      setTimeout(() => {
        // updateCart();
      }, 100);
    }
  }, [ItemQuantity]);

  useEffect(() => {
    setTimeout(() => {
      const ProductPrice = productData.price * ItemQuantity;
      // alert(`pr: ${productData.price}`);
      setLoggedInUserData((prevloggedInUserData) => {
        return {
          ...prevloggedInUserData,
          checkoutPrice: ProductPrice.price,
        };
      });
    }, 1000);
    console.log(loggedInUserData);
    // alert(`Price :${ProductPrice}`)
  }, [contextState]);

  useEffect(() => {
    if (productData?.productId) {
      // console.log("ID SET")
      getProductData();
    } else {
      // console.log("ID not Set")
      setProductData(props.data);
    }
  }, [productData]);

  const getProductData = () => {
    setLoading(true);
    if (productData.productId) {
      axios
        .get(
          `http://localhost:5000/api/products/find/${productData?.productId}`
        )
        .then(function (response) {
          // console.log('single Product data',response)
          setProductDetail(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
          toast.error(" Failed!", { duration: 4000 });
        });
    } else {
      setProductData(props.data);
    }
  };

  const updateCart = () => {
    const headers = {
      "Content-Type": "application/json",
      token: `Bearer ${loggedInUserData.data.accessToken}`,
    };

    const data = {
      userId: loggedInUserData.data.others._id,
      products: [
        {
          productId: productData.productId,
          quantity: ItemQuantity,
        },
      ],
    };

    axios
      .put(`http://localhost:5000/api/cart/${props.cartID}`, data, {
        headers: headers,
      })
      .then((response) => {
        // console.log("Cart update", response.data);
        toast.success(" Cart updated successfully");
      })
      .catch((error) => {
        // console.log("Cart  update error", error);
        toast.error("Cart  update Failed!");
      });
  };

  
  const handelDecrement = () => {
    if (ItemQuantity <= 1) {
      toast.error("Cannot remove the last item, please delete the item");
    } else {
      setItemQuantity(ItemQuantity - 1);
    }
  };

  const handelIncement = () => {
    setItemQuantity(ItemQuantity + 1);
  };
  const handelDelete = () => {};

  return (
    <>
      {loading ? (
        <Loading />
      ) : productData ? (
        <div className={Style.OrderItemContainer}>
          <div style={{ display: "flex", gap: "1rem" }}>
            {/* <div
            style={{ backgroundImage: `url('${productDetails.img[0]}')` }}
            className={Style.ProductImg}
            /> */}
            <p>
              {productDetails?.title}
              <br />
              <span
                style={{
                  color: "#ccc",
                  fontSize: ".7rem",
                  marginBlock: ".5rem",
                }}
              >
                {productData._id}
              </span>
            </p>
          </div>

          {props.editable ? (
            <div className={Style.UpdateProduct}>
              <span onClick={handelDecrement}>-</span>
              <input
                type="number"
                name=""
                id=""
                value={ItemQuantity}
                onChange={(event) => setItemQuantity(event.target.value)}
              />
              <span onClick={handelIncement}>+</span>
            </div>
          ) : props.addToCart ? (
            <></>
          ) : (
            <div style={{ textAlign: "center" }}>
              <p>Quantity</p>
              <p>{ItemQuantity}</p>
            </div>
          )}
          <p>&#8377; {productDetails?.price * ItemQuantity}</p>

          {props.editable ? (
            <button onClick={handelDelete}>
              <i className="fa-solid fa-trash"></i>
            </button>
          ) : (
            ""
          )}

          {props.addToCart ? (
            <button>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
