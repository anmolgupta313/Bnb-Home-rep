import './App.css';
import Nav from './components/nav';
import Home from './components/home';
import { useState } from 'react';

function App() {
  const [drop, setDrop] = useState(false)

  function toggle(){
    setDrop((prev)=>{
      return !prev
    })
  }
  return (
    <div className="App">
      <Nav drop={drop} toggle={toggle} />
      <Home />
    </div>
  );
}

export default App;
