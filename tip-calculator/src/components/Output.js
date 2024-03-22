export default function Output({bill, myTip, myFriendsTip}) {
    let totalTip = Number((myTip + myFriendsTip) / 2);
   
    return <div>
        {bill !== 0 ? <div>
            <h1>You pay ${bill+totalTip} (${bill} + ${totalTip} tip)</h1>
        </div> : ''}
        
        </div>
}