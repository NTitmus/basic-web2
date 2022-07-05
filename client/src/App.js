import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import react from 'react';
import { useState } from 'react';





const App = () => {
  const [mess, setMess] = useState('Start');
  const [count, setCount] = useState(0)

  
const onButtonClick = () => {
  const callAPI = async () => {
    const basicResponse = await axios.get('/api/message');
    console.log(basicResponse)
    setMess(basicResponse.data)
    setCount(count + 1)
  }
  callAPI();  
}

const onButton2Click = () => {
  const callAPI2 = async () => {
    const basicResponse2 = await axios.get('/api/alternative');
    console.log(basicResponse2.data);
    setMess(basicResponse2.data);
    setCount(count + 1);
  }
  callAPI2()
}

  return (
    <div>
      <h1>Hi there....! ***</h1>
      <button onClick={()=>onButtonClick()}>Call API</button>
      <button onClick={()=>onButton2Click()}>SecondButton</button>
      <div>
        <h2>0!</h2>
        <p>{mess}</p>
        <h3>{count}</h3>
      </div>
    </div>
  );
}

export default App;
