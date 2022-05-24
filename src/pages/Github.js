import React,{useRef, useState} from 'react'
import '../styles/Github.css';
function Github() {
  const testRef = useRef();
  const [state, setstate] = useState();

  const test = () => {
    console.log('test함수 실행');
  }

  const testfunc = () => {
    console.log('testfunc입니다');
  }

  return (
    <div className='github'>
      <div className='' onClick={testfunc}>git 페이지 입니다</div>
      <MyComponent Ref={testRef} myFunction={testfunc}/>
    </div>
  )
}

export default Github




function MyComponent() {
  
  return (
    <div>자식 컴포넌트 입니다</div>
  ) 
}