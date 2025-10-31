import React, { useEffect, useState } from "react";
import { getAllSigns, addSign } from "./api/trafficSignApi";
import SignTable from "./components/SignTable";
import AddSignForm from "./components/AddSignForm";
import SignMap from "./components/SignMap";

function App() {
  const [signs, setSigns] = useState([]);
  
  const loadSigns = async () => {
    const data = await getAllSigns();
    setSigns(data);
  };

  useEffect(() => {
    loadSigns();
  }, []);

  const handleAddSign = async (sign) => {
    await addSign(sign);
    loadSigns();
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Traffic Sign Service</h1>
      <AddSignForm onAdd={handleAddSign} />
      <SignTable signs={signs} />
      <SignMap signs={signs} />
    </div>
  );
}

export default App;
