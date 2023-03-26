import { useEffect, useState } from "react";
import "./App.css";
import { getUsers, getPost } from "./data";

function App() {
  // Statelerin tanımlandığı kısım
  // Number input da girilen değeri state de tutmak için
  // post ve users dönen datayı state de tutmak için
  const [number, setNumber] = useState("");
  const [post, setPost] = useState("");
  const [users, setUsers] = useState("");

  // Number değiştikçe tekrar istek atmak için useEffect kullanıldı
  useEffect(() => {
    if (number > 0) {
      getPost(number, setPost);
      getUsers(number, setUsers);
    }
  }, [number]);
  return (
    <div className="App">
      {/* Number girdiğimiz input */}
      <input
        type="text"
        className="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {/* Dönen datanın basıldığı bölüm */}
      <div className="data">
        <div className="title">Post :</div>
        <code>{post && JSON.stringify(post)}</code>
        <div className="title">Users :</div>
        <code>{users && JSON.stringify(users)}</code>
      </div>
    </div>
  );
}

export default App;
