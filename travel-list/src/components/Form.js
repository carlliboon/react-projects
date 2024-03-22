import { useState } from "react";

export default function Form({addItems}) {
    const [desc, setDesc] = useState("");
    const [qty, setQty] = useState(1);
  
    function handleSubmit(event){
      
      if(!desc) return;
  
      const newItem = {id: Date.now(), 
      description: desc,
      packed: false, 
      quantity: qty};
      
      console.log(newItem);
  
      addItems(newItem);
  
      event.preventDefault();
  
      setDesc("");
      setQty(1);
    }
  
    return (<form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={qty} onChange={(e)=>setQty(parseInt(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i + 1).map(num=><option value={num} key={num}>{num}</option>)}
      </select>
      <input type="text" placeholder="Item..." value={desc} onChange={(e)=>setDesc(e.target.value)}/>
      <button>Add</button>
    </form>);
  }