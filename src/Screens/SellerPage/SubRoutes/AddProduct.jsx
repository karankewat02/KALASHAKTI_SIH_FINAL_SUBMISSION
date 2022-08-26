import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Style from "../SellerPage.module.css";
import Context from '../../../Context/Context'
import Loading from "../../Loading/Loading";
const axios = require("axios").default;

export default function AddProduct() {

    
  const [loggedInUserData,] = useContext(Context)

  const [name, setName] = useState("");
  const [Price, setPrice] = useState(0);
  const [URL1, setURL1] = useState("");
  const [URL2, setURL2] = useState("");
  const [URL3, setURL3] = useState("");
  const [URL4, setURL4] = useState("");
  const [desc, setdesc] = useState("");
  const [varientsStatus, setvarientsStatus] = useState(false);
  const [varientType, setVaritentType] = useState("");
  const [variantData, setVaritentData] = useState([]);
  const [highlightData, sethighlightData] = useState('');
  const [ specificationsData, setspecifications] = useState([]);
  const [category,setCategory] = useState([]);
  const [region,setRegion] =useState('default')
  const [dimensions,setDimensions]=useState("");
  const [weight,setWeight]=useState("");
  const [ instructions,setInstructions]=useState("");
  const [Other,setOther]=useState("");

  const [loading, setLoading] = useState(false);



  const handelAddProduct=()=>{
    if(!name || !Price || !URL1 || !URL2 || !URL3 || !URL4 || !desc || !highlightData || !specificationsData || !category || !region || !dimensions || !weight ){
        toast.error("Enter all required fields (marked with *)");
    }else{
      const ProductData = {
          title: name,
          desc : desc,
          price: Price,
          img: [URL1,URL2,URL3,URL4],
          category: [...category],
          varientType:varientType,
          variantData:variantData,
          isApproved:false,
          region: region,
          specifications : [dimensions,weight,instructions,Other],
          highlights : highlightData,
          sellerId: loggedInUserData.data.others._id
      }

  setLoading(true);
  const headers = {
    "Content-Type": "application/json",
    "token": `Bearer ${loggedInUserData.data.accessToken}`,
  };
  const body = ProductData;
  axios.post(`http://localhost:5000/api/products`, body,
      {
        headers: headers,
      }
    )
    .then((response) => {
      console.log(response);
      // data get fetched successfully
      console.log(response.data);
      toast.success(" Product added Succesfully");
      setLoading(false);
    })
    .catch((error) => {
      console.log("Cart Data error", error);
      toast.error("Cart Data Failed!");
      setLoading(false);
    });
      
    }
}
  return (
    <>
    {loading ? <Loading /> : 
    <div className={Style.AddProduct}>
        <h2>Add product</h2>
        <p>* means required</p>
        <div>
          <br />
          <input
            type="text"
            name="productName"
            placeholder="Enter Name of Product *"
            onChange={(e)=>{setName(e.target.value)}}
            />
          <br />
          <input
            type="number"
            name="price"
            id=""
            placeholder="Enter Price of product in ruppes *" 
            onChange={(e)=>{setPrice(e.target.value)}}
            />
          <br />
          <input
            type="text"
            name="image1"
            placeholder="Enter the 1st product Image URL (Thumb nail) * "
            onChange={(e)=>{setURL1(e.target.value)}}
            />
          <br />
          <input
            type="text"
            name="image2"
            placeholder="Enter the 2nd product Image URL  *"
            onChange={(e)=>{setURL2(e.target.value)}}
            />
          <br />
          <input
            type="text"
            name="image3"
            placeholder="Enter the 3rd product Image URL *"
            onChange={(e)=>{setURL3(e.target.value)}}
            />
          <br />
          <input
            type="text"
            name="image4"
            placeholder="Enter the 4th product Image URL  *"
            onChange={(e)=>{setURL4(e.target.value)}}
            />
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Describe the product in around 100 words *"
            onChange={(e)=>setdesc(e.target.value)}
            ></textarea>

          <label htmlFor="category"><p>Check the product categories</p></label>

          
          <div style={{display:'flex',justifyContent:'center'}}>
            <input  onChange={ (e)=> e.target.checked? setCategory(e.target.value) :"" } 
            style={{width:'unset'}} type="radio" name="category" id="cat1" value='handloom' /><label style={{width:'unset'}} htmlFor="cat1"> Handloom </label>
          </div>

          <div style={{display:'flex',justifyContent:'center'}}>
            <input  onChange={ (e)=> e.target.checked? setCategory(e.target.value) :"" } 
            style={{width:'unset'}} type="radio" name="category" id="cat1" value='handicraft' /><label style={{width:'unset'}} htmlFor="cat1"> Handicraft</label>
          </div>
          
          <div style={{display:'flex',justifyContent:'center'}}>
            <input  onChange={ (e)=> e.target.checked? setCategory(e.target.value) :"" } 
            style={{width:'unset'}} type="radio" name="category" id="cat1" value='decor' /><label style={{width:'unset'}} htmlFor="cat1"> Home Decor</label>
          </div>

          <div style={{display:'flex',justifyContent:'center'}}>
            <input onChange={ (e)=> e.target.checked? setCategory(e.target.value) :"" }  style={{width:'unset'}} type="radio" name="category" id="cat2" value='jewllery' /><label style={{width:'unset'}} htmlFor="cat2"> Jewllery</label>
          </div>

          <div style={{display:'flex',justifyContent:'center'}}>
            <input onChange={ (e)=> e.target.checked? setCategory(e.target.value) :"" }  style={{width:'unset'}} type="radio" name="category" id="cat3" value='art' /><label style={{width:'unset'}} htmlFor="cat3"> Painting</label>
          </div>

          <div style={{display:'flex',justifyContent:'center'}}>
            <input onChange={ (e)=> e.target.checked? setCategory(e.target.value) :"" } style={{width:'unset'}} type="radio" name="category" id="cat4" value='bags' /><label style={{width:'unset'}} htmlFor="cat4"> bags</label>
          </div>

          <div style={{display:'flex',justifyContent:'center'}}>
            <input onChange={ (e)=> e.target.checked? setCategory(e.target.value) :"" } style={{width:'unset'}} type="radio" name="category" id="cat4" value='others' /><label style={{width:'unset'}} htmlFor="cat4"> others</label>
          </div>
          
          <hr />

          {/* <br />
          <label htmlFor="">Does product has Varients "optional"</label>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => {
              setvarientsStatus(!varientsStatus);
            }}
            />
          <br /> */}
            <br/>
            <h3>Region</h3>
            <select  onChange={(e)=>{setRegion(e.target.value)}} id="country-state" name="country-state">
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CH">Chandigarh</option>
                <option value="CT">Chhattisgarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PY">Puducherry</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UT">Uttarakhand</option>
                <option value="WB">West Bengal</option>
            </select>
            <br/>
          <br />
          {varientsStatus ? (
            <>
              <label htmlFor="varients">
                Type of product varient *Optional
              </label>
              <select
                name="varients"
                id="varients"
                onChange={(event) => {
                  setVaritentType(event.target.value);
                }}
                >
                <option value="Color">Color</option>
                <option value="Size">Size i.e S,XL,XXL </option>
              </select>
              <br />

              {varientType === "Color" ? (
                <>
                  <br />
                  <label htmlFor="">Color1</label>
                  <input onChange={(e)=>{setVaritentData(variantData.push(e.target.value))}} type="color" name="" id="" />
                  <br />
                  <label htmlFor="">Color2</label>
                  <input onChange={(e)=>{setVaritentData(variantData.push(e.target.value))}} type="color" name="" id="" />
                  <br />
                  <label htmlFor="">Color3</label>
                  <input onChange={(e)=>{setVaritentData(variantData.push(e.target.value))}} type="color" name="" id="" />
                  <br />
                  <label htmlFor="">Color4</label>
                  <input onChange={(e)=>{setVaritentData(variantData.push(e.target.value))}} type="color" name="" id="" />
                  <br />
                  <label htmlFor="">Color5</label>
                  <input onChange={(e)=>{setVaritentData(variantData.push(e.target.value))}} type="color" name="" id="" />
                </>
              ) : (
                <>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter the size varient 1"
                    onChange={(e)=>{setVaritentData(...variantData ,variantData.push(e.target.value))}}
                    />
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter the size varient 2"
                    onChange={(e)=>{setVaritentData(variantData.push(e.target.value))}}
                    />
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter the size varient 3"
                    onChange={(e)=>{setVaritentData(variantData.push(e.target.value))}}
                    // onChange={(e)=> getPjl(e) }
                    />
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter the size varient 4"
                    onChange={(e)=>{setVaritentData(variantData.push(e.target.value))}}
                    // onChange={(e)=> getPjl(e) }
                    />
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter the size varient 5"
                    onChange={(e)=>{setVaritentData(variantData.push(e.target.value))}}
                    // onChange={(e)=> getPjl(e) }
                    />
                  <br />
                </>
              )}
            </>
          ) : (
            <></>
            )}

          <br />
          <p>Enter the highlights of the product seperated with "|"</p>
          <textarea
            name="highlights"
            id=""
            cols="30"
            rows="10"
            placeholder="Robust | Light weight | pure cotton ..."
            onChange={(e)=>{sethighlightData(e.target.value)}}
            ></textarea>

          <br />

          <p>Enter the specification</p>
          <label htmlFor="">Product Dimensions</label>
          <input
            // onChange={(e)=>{setspecifications(specificationsData.push({dimentions:e.target.value}))}}
            onChange={(e)=>{setDimensions(e.target.value)}}
            type="text"
            name="varientText"
            placeholder=" 40 x 33 x 40 cm"
            />
          <br />
          <label htmlFor="">Product Weight</label>
          <input 
          // onChange={(e)=>{setspecifications(specificationsData.push({weight:e.target.value}))}}
          onChange={(e)=>{setWeight(e.target.value)}}
           type="text" 
           name="varientText"
           placeholder="550gm" />
          <br />
          <label htmlFor="">Care instruction</label>
          <input 
          type="text"
          name="varientText" 
           placeholder="" 
           //  onChange={(e)=>{setspecifications(specificationsData.push({careInstruction:e.target.value}))}} 
           onChange={(e)=>{setInstructions(e.target.value)}}
           />
          <br />
          <label htmlFor="">Other</label>
          <input
            // onChange={(e)=>{setspecifications(specificationsData.push({other:e.target.value}))}}
            onChange={(e)=>{setOther(e.target.value)}}
            type="text"
            name="varientText"
            placeholder="Enter any other Specifications"
            />
          <br />
          <button onClick={handelAddProduct}>Add Product</button>
        </div>
      </div>
    }
    </>
  )
}
