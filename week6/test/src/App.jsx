import { useRef, useState } from "react";

function App() {
  const [friends, setFriends] = useState([]);
  const friendInputRef = useRef();

  function handleClick() {
    friendInputRef.current.focus()
    const newFriend = friendInputRef.current.value;
    if (newFriend) {
      setFriends([...friends, newFriend]);
      friendInputRef.current.value = ""; // Clear the input after adding a friend
    }
  }

  return (
    <>
      <input type="text" ref={friendInputRef} />
      <button onClick={handleClick}>Click to add friends</button>
      <Friends friends={friends} />
    </>
  );
}

function Friends({ friends }) {
  return (
    <>
      <div>Khushi ke acche dost:</div>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>error 404 bhul gyi kya ? </li>
        ))}
      </ul>
    </>
  );
}

export default App;
