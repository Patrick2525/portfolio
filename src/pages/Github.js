import React,{useRef, useState} from 'react'
import '../styles/Github.css';

function Github() {
  const dataRef = useRef();
  const testFunc = (e) => {
    console.log(dataRef);
    console.log(e.target.style);
    //const color = dataRef.current.???;
  }
  const bitcoin_data = useRef();
  fetch("https://api.bithumb.com/public/ticker/BTC_KRW")
    .then(function(res){
      return res.json();
    })
    .then(function(result){
      bitcoin_data.current = result;
      console.log(bitcoin_data);
    })
    //3회차 03:35:14

  return (
    <div className='github'>
      <div className='call' ref={dataRef} onClick={testFunc}>div</div>
    </div>
  )
}

export default Github

