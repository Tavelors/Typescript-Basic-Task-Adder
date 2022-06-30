import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import tw from 'twin.macro'
import styled from 'styled-components'
import { json } from 'stream/consumers';
import axios from 'axios';
import './App.css';
import Data from './components/Data'
import MovieData from './components/MovieData'
function App() {
const [number, setNumber] = useState<string>("5")
const [jsonDump, setjsonDump] = useState<[]>([])

useEffect(() => {
    const fetchData = async () => {
      const data = axios.get('https://randomuser.me/api/')
      const other = await data
      const newdata = JSON.stringify(other)
  
      setjsonDump(other.data.results)
      
    }
 fetchData()

}, [])


console.log(jsonDump);

const changeNumber = () => {
  setNumber("10")
}



  return (
    <div className="App">

<Data />

    </div>
  );
}





const UL = styled.ul/*css*/`
// background-color: red;
${tw`
  // bg-gray-900
`}
`


export default App;
