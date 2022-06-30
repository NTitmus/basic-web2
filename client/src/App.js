import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const onButtonClick = () => {
  const callAPI = async () => {
    const basicResponse = await axios.get('/api/message');
    console.log(basicResponse)
  }
  callAPI();  
}

function App() {
  return (
    <div>
      <h1>Hi there! ***</h1>
      <button onClick={()=>onButtonClick()}>Call API</button>
    </div>
  );
}

export default App;
