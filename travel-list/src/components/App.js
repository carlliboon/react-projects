import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";


export default function App() {
  const [items, setItems] = useState([]);

  function handleAtItems(item) {
    setItems(items=>[...items, item]);
  }

  function handleClearList(){
    const confirmed = window.confirm('Are you sure you want to delete all the items?');
    setItems(confirmed === true ? [] : items);
  }
  
  function handleDeleteItem(id) {
    setItems(items.filter(items=>items.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items)=>items.map((item) => item.id === id ? {...item, packed: !item.packed} : item));
  }


  return (
    <div className="app">
      <Logo />
      <Form addItems={handleAtItems}/>
      <PackingList items={items} handleClearList={handleClearList} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}/>
      <Stats items={items}/>
    </div>
  );
}
