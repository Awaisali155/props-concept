import React, { Component } from 'react';
import { useState } from 'react';
import './App.css';
import ComponentA from './Components/ComponentA'
function App() {
  // const [count, setcount] = useState(0)
  // const add = () => {
  //   setcount(count+1)
  // }
  let [counter, setcounter] = useState(0);
  const add = () => setcounter(counter + 1);
  return (
    <>
    
      <ComponentA counter={counter} add={add} />


    </>
  );
}

export default App;
