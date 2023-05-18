import React from 'react'
import { useState } from 'react';
import './Loginform.css'


function Loginform() {
  const [priceRange, setPriceRange] = useState(0);
  const [formData, setFormData] = useState({
      carMake: "",
      carModel: "",
      date: "",
      Mileage: "",
      Condition: "",
      Features: [],
    });
    const handleChange = (event) => {
      const { name, value, type } = event.target;
    
      if (type === "checkbox") {
        const features = Array.isArray(formData.Features)
        ? formData.Features.includes(value)
        ? formData.Features.filter((feature) => feature !== value)
        : [...formData.Features, value]
          : [value];
    
        setFormData((prevData) => ({
          ...prevData,
          features,
        }));
      }else if (type === "range" && name === "priceRange") {
        setPriceRange(parseInt(value)); }else {
          setFormData((prevData) => ({
              ...prevData,
          [name]: type === "range" ? parseInt(value) : value,
      }));
      }
  };
  
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
  };
  
  const { carMake, carModel, date, Mileage, Condition, Features } = formData;
  return (
    <div className='cover'>
      <form onSubmit={handleSubmit}>
      <h1>Car Sell</h1>
      <input type='text' placeholder='Car Make' value={carMake} onChange={handleChange}/><br/>
      <input type='text' placeholder='Car Model' value={carModel} onChange={handleChange}/><br/>
      <input type='text' placeholder='Day/Month/Year' value={date}  onChange={handleChange}/><br/>
      <input type="number" placeholder="Mileage" value={Mileage} onChange={handleChange}/><br/>
      <div className='condition'>
      <label>Condition:</label><br/>
    <input type="radio" id="excellent" name="condition" value="excellent" checked={Condition==="Excellent"} onChange={handleChange}/>
    <label htmlFor="excellent">Excellent</label><br/>

    <input type="radio" id='good' value="good" checked={Condition==="good"} onChange={handleChange}/>
    <label htmlFor="good">Good</label><br/>

    <input type="radio"  id='fair'  value="fair" checked={Condition==="fair"} onChange={handleChange}/>
    <label htmlFor="fair">Fair</label><br/>

    <input type="radio" id='poor' value="poor" checked={Condition==="poor"} onChange={handleChange}/>
    <label htmlFor="poor">Poor</label><br/>
    <label>Features:</label><br/>
    <input type="checkbox" id='ac' value="ac" checked={Features.includes("Air Conditioning")} onChange={handleChange}/><label htmlFor="ac">Air Conditioning</label><br/>

    <input type="checkbox" id="ps" name="features" value="ps" checked={Features.includes("Power Steering")} onChange={handleChange}/><label htmlFor="ps">Power Steering</label><br/>

    <input type="checkbox" id="pw" name="features" value="pw" checked={Features.includes("Power Window")} onChange={handleChange}/>
    <label htmlFor="pw">Power Windows</label><br/>

    <input type="checkbox" id="abs" name="features" value="abs" checked={Features.includes("ABS")} onChange={handleChange}/>
    <label htmlFor="abs">ABS</label>
    <br/><br/>
    
    <label htmlFor="transmission">Transmission:</label>
    <select id="transmission" name="transmission">
      <option value="automatic" onChange={handleChange}>Automatic</option>
      <option value="manual" onChange={handleChange}>Manual</option>
    </select><br/>
    
    <label htmlFor="priceRange">Price Range</label>
    <input type="range" id="priceRange" name="priceRange"  min={10} max={1000} value={priceRange} onChange={handleChange}/>
    <span>{priceRange}</span> 
    </div><br/>
    <button className='submit'>SUBMIT</button>
    </form>
    </div>

  )
}

export default Loginform

