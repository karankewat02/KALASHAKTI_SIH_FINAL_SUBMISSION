import React, { useContext, useEffect, useState } from 'react';
import Styles from "../HomeDecort/Homedecor.module.css";
import toast from "react-hot-toast";
import Context from '../../Context/Context'
import ProductCard from '../../components/ProductCard/ProductCard';
import Loading from '../Loading/Loading';
const axios = require("axios").default;
const HomeDecortRegion = () => {


    const [loggedInUserData,] = useContext(Context);
    const [ProductData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);

    //   useEffect(() => {
    //     setLoading(true)
    //     axios.get("http://localhost:5000/api/products")
    //       .then(function (response) {
    //           setProductData(response.data);
    //           console.log(response)
    //           console.log(ProductData)
    //           setLoading(false)
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //         setLoading(false)
    //         toast.error(" Failed!", { duration: 4000 });
    //       });
    //   }, []);
    const getMovies = async () => {
        setLoading(true)
        try {
            const res = await fetch("http://localhost:5000/api/products");
            const data = await res.json();
            // console.log(data);
            setProductData(data);
            // console.log(ProductData); 
            setLoading(false)

        } catch (error) {
            console.log(error);
            toast.error("Failed")
        }
    }
    useEffect(() => {
        console.log(loggedInUserData.productCategory)
        getMovies()
    }, [])
    return (
        <>
            {loading ? <Loading /> :
                <div className={Styles.homedecorsection} >
                    {ProductData?.map((Product, index) => {
                        // console.log(Product.categories[0]);
                        console.log(loggedInUserData.productCategory);
                        return (
                            <>
                                {/* {Product._id} <br /> */}
                                {Product.region === loggedInUserData.productCategory ?
                                    // <div>{Product.title}</div>
                                    <div className={Styles.homedecorsection} >

                                        <ProductCard data={Product} key={index} />
                                    </div>

                                    : <></>}
                            </>
                        )
                    })}
                </div>

            }
        </>
    )
}

export default HomeDecortRegion