import React, { useState } from "react";
import Context from './Context'

export default function ContextWrapper(props){

    const [loggedInUserData,setLoggedInUserData] = useState({
        status: false,
        data : {},
        cartActive: false,
        cartId : "",
        cartData : {},
        checkoutPrice : 0,
        productCategory: ""
    })

    return(
        <Context.Provider value={[loggedInUserData,setLoggedInUserData]}>
            {props.children}
        </Context.Provider>
    )
}