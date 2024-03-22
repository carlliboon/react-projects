import { useState } from "react";
import InputBill from "./components/InputBill";
import Output from "./components/Output";
import Reset from "./components/Reset";
import ServiceTip from "./components/ServiceTip";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [myFriendsTip, setMyFriendsTip] = useState(0);
  const [myReview, setMyReview] = useState('dissatisfied');
  const [myFriendReview, setMyFriendsReview] = useState('dissatisfied');
  
  return (
    <div className="App">
      <InputBill bill={bill} setBill={setBill}>
      <span>How much was the bill?</span>
      </InputBill>
      <ServiceTip bill={bill} setMyTip={setMyTip} setMyFriendsTip={setMyFriendsTip} myReview={myReview} setMyReview={setMyReview} myFriendReview={myFriendReview} setMyFriendsReview={setMyFriendsReview}/>
        <Output bill={bill} myTip={myTip} myFriendsTip={myFriendsTip}/>
      <Reset setBill={setBill} setMyTip={setMyTip} setMyReview={setMyReview} setMyFriendsTip={setMyFriendsTip} setMyFriendsReview={setMyFriendsReview}/>
    </div>
  );
}

