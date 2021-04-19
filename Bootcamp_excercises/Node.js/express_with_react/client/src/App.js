import React, { useEffect, useState } from "react";
import api from "./API/api";

function App() {
  const [value, setValue] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.get("test");
      console.log(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    await api.post("form", { formValues: value });
  };
  return (
    <div className="App">
      My APP
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
