export default function Reset({setMyTip, setMyFriendsTip, setBill, setMyReview, setMyFriendsReview}) {

    function handleReset(){
        setBill(0);
        setMyReview('dissatisfied');
        setMyFriendsReview('dissatisfied');
        setMyTip(0);
        setMyFriendsTip(0);
    }

    return <button onClick={handleReset}>
        Reset
    </button>
}
