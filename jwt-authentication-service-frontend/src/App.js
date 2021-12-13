import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [test, setTest] = useState(null);

  const getTest = async () => {
    let res = await Axios.get("http://localhost:8080/");

    setTest(res.data)

  };

  return (
    <div>
      <h1>test : {test}</h1>
      <button onClick={getTest}>Test</button>
    </div>
  );
}

export default App;