export default function Stats({items}){
    const numItems = items.length;
    const numPacked = items.filter((item)=> item.packed).length;
    const numPackedPercent = numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);
  
    if(!items.length){
      return <p className="stats">
        <em>
        Start adding some items to your packing list 🚀
      </em>
      </p>
    }
    return (<footer className="stats">
      <em>
        {numPackedPercent === 100 ? 'You got everything! Ready to go ✈️' : `👜 You have ${numItems} items on your list, and you already packed 
        ${numPacked} items ${numPackedPercent}%`}
      </em>
    </footer>);
  }