import { useState, useEffect } from "react";
import Message from "./Message";

import Username from "./Username";
import db from "../FirebaseHandler";
import { collection, addDoc, getDocs } from "firebase/firestore";

function App() {
  const [status, setStatus] = useState("NULL");
  const [data, setData] = useState([]);

  const addToFirebase = async (n) => {
    await addDoc(collection(db, "Usernames"), {
      Name: n,
    })
      .then(() => {
        setStatus("Succesfully added " + n + " to firebase database");
      })
      .catch((err) => {
        setStatus("Error in adding " + n + " to firebase: " + err);
      });
  };

  useEffect(() => {
    async function fetchDocuments() {
      const querySnapshot = await getDocs(collection(db, "Usernames"));
      const docsArray = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(docsArray);
    }

    fetchDocuments();
  });

  return (
    <div>
      <Message status={status}></Message>
      <Username onSubmit={addToFirebase}></Username>
      {data.map((doc) => (
        <h3 key={doc.id}>{doc.Name}</h3> // assuming 'name' is a field in the document
      ))}
    </div>
  );
}

export default App;
