import React,{useEffect, useRef, useState} from 'react'
import '../styles/Github.css';

function Github() {
  const dataRef = useRef();
  const testFunc = (e) => {
    console.log(dataRef);
    console.log(e.target.style);
    //const color = dataRef.current.???;
  }
  const [state, setState] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => response.json())
    .then((json) =>{
      setState( {post : json});
      state.post.map((data) => {
        console.log(data);
      })
    });
  },[])

  


  return (
    <div className='github'>
      <div className='call' ref={dataRef} onClick={testFunc}>div</div>
    </div>
  )
}

export default Github

