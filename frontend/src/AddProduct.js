import React, { useState } from "react";
import "./AddProduct.css";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [error,setError] = useState(false)

  const addProduct = async () => {


    //jab kuch data hoga toh false return karega !name
    //true tb return karega jab is input field k andar koi bhi data mnhi hoga
   if( !name || !price ){

    setError(true);
    return false;
   }
   alert("Contact Saved Successfully");

    const userId=JSON.parse(localStorage.getItem("user"))._id;
    let  result= fetch("https://contactapp-grq6.onrender.com/add-product",{
      method:"post",
      body: JSON.stringify({name,price, category,company,userId,date}),
      headers:{
      "Content-Type":"application/json",
      authorization:`bearer ${JSON.parse(localStorage.getItem('token')) }`
      }
    })
    result= await result.json();
  

   
     
  };

  return (
    <div className="prod">
      <h1 style={{color:"white"}}>create contact</h1>

      <input
        type="text"
        placeholder="Conatct name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      {error && !name  && <span  className="spn">Enter a vaild name</span>}
      <input
        type="text"
        placeholder="Phone number"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
      {error && !price  && <span  className="spn">Enter a vaild Registration number</span>} 

      <button  style={{height :"50px"}} onClick={addProduct}>Save Contact</button>
    </div>
 
  );
};

export default AddProduct;
