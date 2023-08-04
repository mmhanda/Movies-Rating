import './App.css';
import {useState, useEffect} from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 10)
      alert("You have reached the max")
  },[counter])

  return (
    <div className="App">
    <button onClick={() => {setCounter((prevcount) => prevcount - 1)}}>-</button>
      <h1>{counter}</h1>
    <button onClick={() => {setCounter((prevcount) => prevcount + 1)}}>+</button>
    </div>
  );
}

export default App;
