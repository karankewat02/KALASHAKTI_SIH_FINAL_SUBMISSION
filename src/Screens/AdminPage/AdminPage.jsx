import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Style from "./AdminPage.module.css";

export default function AdminPage() {
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
  const getPjl = (e) => {
    const{value,checked}=e.target
    console.log(`${value} is ${checked}`)
    if(checked){
      setCategory([...category,value])
    }else{
      setCategory(category.filter((e)=>e!==value))
    }
}
  const handelAddProduct=()=>{
      if(!name || !Price || !URL1 || !URL2 || !URL3 || !URL4 || !desc || !highlightData || !specificationsData){
          toast.error("Enter all required fields (marked with *)");
      }else{
        const ProductData = {
            title: name,
            desc : desc,
            price: Price,
            img: [URL1,URL2,URL3,URL4],
            category: category,
            varientType:varientType,
            variantData:variantData,
            isApproved:false,
            region: region,
            specifications : specificationsData,
            highlights : highlightData
        }
        console.log(ProductData)
      }
  }

  return (
    <div className={Style.AdminPage}>
      <h1>Admin Dashboard</h1>

      
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
            <input  onChange={(e) => getPjl(e)}
            style={{width:'unset'}} type="checkbox" name="category" id="cat1" value='sarees' /><label style={{width:'unset'}} htmlFor="cat1"> Sarees</label>
          </div>

          <div style={{display:'flex',justifyContent:'center'}}>
            <input onChange={(e) => getPjl(e)} style={{width:'unset'}} type="checkbox" name="category" id="cat2" value='decorations' /><label style={{width:'unset'}} htmlFor="cat2"> Decorations</label>
          </div>

          <div style={{display:'flex',justifyContent:'center'}}>
            <input onChange={(e) => getPjl(e)}style={{width:'unset'}} type="checkbox" name="category" id="cat3" value='painting' /><label style={{width:'unset'}} htmlFor="cat3"> painting</label>
          </div>

          <div style={{display:'flex',justifyContent:'center'}}>
            <input onChange={(e) => getPjl(e)} style={{width:'unset'}} type="checkbox" name="category" id="cat4" value='Marbel Art' /><label style={{width:'unset'}} htmlFor="cat4"> marbel Art</label>
          </div>
          
          <hr />

          <br />
          {/* <label htmlFor="">Does product has Varients "optional"</label>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => {
              setvarientsStatus(!varientsStatus);
            }}
          />
          <br /> */}

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
                    onChange={(e)=>{setVaritentData(variantData.push(e.target.value))}}
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
                  />
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter the size varient 4"
                    onChange={(e)=>{setVaritentData(variantData.push(e.target.value))}}
                  />
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter the size varient 5"
                    onChange={(e)=>{setVaritentData(variantData.push(e.target.value))}}
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
            onChange={(e)=>{setspecifications(specificationsData.push({dimentions:e.target.value}))}}
            type="text"
            name="varientText"
            placeholder=" 40 x 33 x 40 cm"
          />
          <br />
          <label htmlFor="">Product Weight</label>
          <input onChange={(e)=>{setspecifications(specificationsData.push({weight:e.target.value}))}} type="text" name="varientText" placeholder="550gm" />
          <br />
          <label htmlFor="">Care instruction</label>
          <input type="text" name="varientText" placeholder="" onChange={(e)=>{setspecifications(specificationsData.push({careInstruction:e.target.value}))}} />
          <br />
          <label htmlFor="">Other</label>
          <input
            onChange={(e)=>{setspecifications(specificationsData.push({other:e.target.value}))}}
            type="text"
            name="varientText"
            placeholder="Enter any other Specifications"
          />
          <br />
          <h2>adswd</h2>
          <input type="text"  />
          <button onClick={handelAddProduct}>Add Product</button>
        </div>
      </div>
    </div>
  );
}
