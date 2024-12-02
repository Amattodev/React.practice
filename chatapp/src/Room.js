import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "./config/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { AuthContext } from "./AuthService";

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const user = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "message"), {
      content: value,
      user: user.displayName,
    });
  };

  useEffect(() => {
    onSnapshot(collection(db, "message"), (snapshot) => {
      const messages = snapshot.docs.map((doc) => {
        return doc.data();
      });

      setMessages(messages);
    });
  }, []);

  return (
    <>
      <h1>Room</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {message.user}: {message.content}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
      <button onClick={() => auth.signOut()}>Log Out</button>
    </>
  );
};

export default Room;
