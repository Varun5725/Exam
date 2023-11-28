import React, { useState } from 'react';

import "./App.css";

function App(){

  const [list,setList]=useState([]);
  const [value,setValue]=useState("");
  const addToList=()=>{
    let tempArr=list;
    tempArr.push(value);
    setList(tempArr);
    setValue("");

  }
  const deleteItem=(index)=>{
    let temp=list.filter((item,i)=>i!==index);
    setList(temp);
  };

  return(
    <div className='App'>
    <fieldset>

      <h1>
        Add Product to List
      </h1>  

      <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={addToList}>Click to Add</button>    
      <h1>Product Catelog </h1>  
      <ol>

        {list.map((item,i)=> <li onClick={()=>deleteItem(i)}>{item}</li>)
        }
      </ol>
      <h1> Click on Product to Delete </h1>  
    </fieldset>

    </div>
  )



}

export default App;