import React,{useState, useEffect} from 'react'
import '../styles/Devlog.css'

function Devlog() {
  const [state1, setState1] = useState(1);
  const [state2, setState2] = useState(1);
  const [state3, setState3] = useState(1);
  const [renderCount, setRenderCount] = useState(0);

  const upState = () => {
    setState1(state1 + 1);
    setState1(state1 + 1);
    setState1(state1 + 1);
    setState2(state2 + 1);
    setState3(state3 + 1);
  };

  useEffect(() => {
    setRenderCount(renderCount + 1);
  }, [state1, state2, state3]);


  return (
    <div className='devlog'>
      <button onClick={upState}>상태값 UP</button>
      <p>상태값1 {state1}</p>
      <p>상태값2 {state3}</p>
      <p>상태값3 {state3}</p>
      <p>랜더링 횟수 {renderCount}</p>
    </div>
    
  )
}

export default Devlog