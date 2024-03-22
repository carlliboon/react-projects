import '../index.css';

export default function ServiceTip({ bill, setMyTip, setMyFriendsTip, myReview, setMyReview, myFriendReview, setMyFriendsReview}) {
    
   
    // let totalTip = (myTip + myFriendsTip) / 2;
    // setTip(totalTip);
    let b = bill;

    function handleOwnFeedback(review) {
        setMyReview(review); // Update the value of myReview state
        if (review === "dissatisfied") setMyTip(b); 
        if (review === "okay") setMyTip(b * 0.05);
        if (review === "good") setMyTip(b * 0.10);
        if (review === "amazing") setMyTip(b * 0.20);
        // Update tip in App.js
         // Or you can pass any other value here
    }

    function handleFriendsFeedback(review) {
        setMyFriendsReview(review); // Update the value of myFriendReview state
        if (review === "dissatisfied") setMyFriendsTip(b);
        if (review === "okay") setMyFriendsTip(b * 0.05);
        if (review === "good") setMyFriendsTip(b * 0.10);
        if (review === "amazing") setMyFriendsTip(b * 0.20);
    }

    return (
        <>
            <div>
                <span>How did you like the service?</span>
                <select value={myReview} onChange={(e) => handleOwnFeedback(e.target.value)}>
                    <option value="dissatisfied">Dissatisfied (0%)</option>
                    <option value="okay">It was okay (5%)</option>
                    <option value="good">It was good (10%)</option>
                    <option value="amazing">Absolutely amazing! (20%)</option>
                </select>
            </div>
            <div>
                <span>How did your friend like the service?</span>
                <select value={myFriendReview} onChange={(e) => handleFriendsFeedback(e.target.value)}>
                    <option value="dissatisfied">Dissatisfied (0%)</option>
                    <option value="okay">It was okay (5%)</option>
                    <option value="good">It was good (10%)</option>
                    <option value="amazing">Absolutely amazing! (20%)</option>
                </select>
            </div>
            
        </>
    );
}
