export default function InputBill({bill, setBill, children}) {
    return <div>
        {children}
        <input type="text" value={bill} onChange={(event)=>setBill(Number(event.target.value))}/>
    </div>
}
