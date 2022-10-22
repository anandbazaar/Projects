import './App.css';
import { useEffect, useState } from "react"

const GG = () => {

  useEffect(() => {
    console.log('hi')
  }, [])

  return <div>gg</div>
}



function App() {
  return (
    <div className="App">
      <GG />
    </div>
  );
}

export default App;
