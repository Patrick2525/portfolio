import React,{useEffect, useRef, useState} from 'react'
import '../styles/Github.css';

function Github() {
  
  const [ isHovering, setIsHovering] = useState(false);

  


  return (
    <div className='github'>
      <div onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)} className='box'>
        hey
      </div>
    </div>
  )
}

export default Github

