import React, {useState} from 'react';

import './App.css';
import Data from './components/Data'
import MovieData from './components/MovieData'
function App() {
const [number, setNumber] = useState<string>("5")

const changeNumber = () => {
  setNumber("10")
}

  return (
    <div className="App">
<Data />
{/* <MovieData /> */}
    </div>
  );
}

export default App;
