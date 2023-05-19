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
      Features: "",
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
          Features:features,
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
      <input type='text' name='carMake' placeholder='Car Make' value={carMake} onChange={handleChange}/><br/>
      <input type='text' name='carModel' placeholder='Car Model' value={carModel} onChange={handleChange}/><br/>
      <input type='text' name='date' placeholder='Day/Month/Year' value={date}  onChange={handleChange}/><br/>
      <input type="number" name='Mileage' placeholder="Mileage" value={Mileage} onChange={handleChange}/><br/>
      <div className='condition'>
      <label>Condition:</label><br/>
    <input type="radio" id="excellent" name="Condition" value="excellent" checked={Condition==="excellent"} onChange={handleChange}/>
    <label htmlFor="excellent">Excellent</label><br/>

    <input type="radio" id='good' value="good" name='Condition' checked={Condition==="good"} onChange={handleChange}/>
    <label htmlFor="good">Good</label><br/>

    <input type="radio"  id='fair'  value="fair" name='Condition' checked={Condition==="fair"} onChange={handleChange}/>
    <label htmlFor="fair">Fair</label><br/>

    <input type="radio" id='poor' value="poor" name='Condition' checked={Condition==="poor"} onChange={handleChange}/>
    <label htmlFor="poor">Poor</label><br/>
    <label>Features:</label><br/>
    <input type="checkbox" id='ac' value="ac" name='Features' checked={Features.includes("ac")} onChange={handleChange}/><label htmlFor="ac">Air Conditioning</label><br/>

    <input type="checkbox" id="ps" name="Features" value="ps" checked={Features.includes("ps")} onChange={handleChange}/>
    <label htmlFor="ps">Power Steering</label><br/>

    <input type="checkbox" id="pw" name="Features" value="pw" checked={Features.includes("pw")} onChange={handleChange}/>
    <label htmlFor="pw">Power Windows</label><br/>

    <input type="checkbox" id="abs" name="Features" value="abs" checked={Features.includes("abs")} onChange={handleChange}/>
    <label htmlFor="abs">ABS</label>
    <br/><br/>
    
    <label htmlFor="transmission">Transmission:</label>
    <select id="transmission" name="transmission" onChange={handleChange}>
  <option value="automatic">Automatic</option>
  <option value="manual">Manual</option>
    </select>
    
    <label htmlFor="priceRange">Price Range</label>
    <input type="range" id="priceRange" name="priceRange"  min={10} max={1000} value={priceRange} onChange={handleChange}/>
    <span>{priceRange}</span> 
    </div><br/>
    <button className='submit' type='submit'>SUBMIT</button>
    </form>
    </div>

  )
}

export default Loginform

