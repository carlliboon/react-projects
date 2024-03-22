import { useState } from "react";
import { Item } from "./Item";

export default function PackingList({items, onDeleteItem, onToggleItem, handleClearList}) {
    const [sortBy, setSortBy] = useState('input');
    let sortedItems;
  
    if(sortBy === "input"){
      sortedItems = items;
    } else if(sortBy === "description") {
      sortedItems = items.slice().sort((a,b)=> a.description.localeCompare(b.description));
    } else if(sortBy === "packed") {
      sortedItems = items.slice().sort((a,b)=> Number(a.packed) - Number(b.packed));
    } else if(sortBy === "quantity") {
      sortedItems = items.slice().sort((a,b)=> a.quantity-b.quantity);
    }
  
  
    return (
    <>
    <div className="list">
      <ul>
        {
          sortedItems.map((items)=><Item item={items} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={items.id} />)
        }
      </ul>
  
      <div className="actions">
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
          <option value="quantity">Sort by quantity</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
      
    </div>
    </>);
  }
  
