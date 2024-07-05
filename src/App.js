import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [excuse, setExcuse] = useState("");

  const fetchData = (excuse) => {
    console.log(excuse);
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then(
      (res) => {
        setExcuse(`Excuse for your ${excuse} is :- ${res.data[0].excuse}`);
      }
    );
  };

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button
        onClick={() => {
          fetchData("party");
        }}
      >
        Party
      </button>
      <button
        onClick={() => {
          fetchData("family");
        }}
      >
        Family
      </button>
      <button
        onClick={() => {
          fetchData("office");
        }}
      >
        Office
      </button>
      <p>{excuse}</p>
    </div>
  );
}

export default App;
