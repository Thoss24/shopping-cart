import React, { useState} from "react";

function App() {

  const [test, setTest] = useState("Test")

  const testButton = () => {
    setTest("Testing")
  }

  return (
 <div>
  <h1>Hello from App</h1>
  <button onClick={testButton}></button>
 </div>
  );
}

export default App;
