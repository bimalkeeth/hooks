import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App=() =>{

  const [count,setCount] =useState(0);

  const incrementCount=()=>{
    setCount(count+1)
  };
  return (
      <button onClick={incrementCount}><h1>I was clicked {count} times.</h1></button>
  );
};

export default App;
