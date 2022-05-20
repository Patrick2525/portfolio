import React,{useState, useRef} from 'react'
import '../styles/Posts.css';



/**
 * post게시물
 * 1. 분류 : css, html, react, ...
 * 2. 작성일자 : 0:요일, 1:월, 2:일, 3:년도
 * 3. 제목 : UseState는 어떻게 동작할까
 * 4. 내용 : 어쩌구 저쩌구
 */

function Posts() {
  const [state, setstate] = useState({
    posts: [
      {
        type : 'React',
        date : new Date('March 17, 2019 03:28:00').toDateString().split(' '), 
        title : 'useState 사용법',
        content : '하지만 간혹, 이 setState가 state를 변경시킨다고 오해하시는 분들이 있는거 같아서 이 글을 작성하게 되었습니다'
      }, {
        type : 'js',
        date : new Date('Decomber 17, 2019 03:28:00').toDateString().split(' '), 
        title : 'eventHandler 사용법',
        content : '이벤트 핸들러는 잘! 사용하면된다',
      }, {
        type : 'React',
        date : new Date('Decomber 17, 2019 03:28:00').toDateString().split(' '), 
        title : 'useRef 사용법',
        content : 'useRef는 잘! 사용하면된다',
      }, {
        type : 'html',
        date : new Date('Decomber 17, 2020 03:28:00').toDateString().split(' '), 
        title : 'ptag 사용법',
        content : 'ptag는 잘! 사용하면된다',
      }, {
        type : 'css',
        date : new Date('Decomber 17, 2020 03:28:00').toDateString().split(' '), 
        title : 'flexbox 사용법',
        content : 'flexbox는 잘! 사용하면된다',
      }, {
        type : 'React',
        date : new Date('Decomber 17, 2020 03:28:00').toDateString().split(' '), 
        title : 'container 사용법',
        content : 'container는 잘! 사용하면된다',
      },
    ],
  })
  const {posts} = state;
  const postCountYearly = useState({
    year : ['2019', '2020'],
    count : [2, 3],
  })

  const handleStyle = (type) => {
    let typeColor;
    switch(type) {
      case 'React':
        typeColor = 'rgb(97,218,251)'
        break;
      case 'css':
        typeColor = 'rgb(48,169,220)'
        break;
      case 'html':
        typeColor = 'rgb(241,103,44)'
        break;
      case 'js':
        typeColor = 'rgb(241,191,38)'
        break;
      default:
        break;
    }
    return { backgroundColor : typeColor }
  }


//   년도 뿌리기

// 1. 년도를 저장할 변수
// 2. 변수랑 비교해서 없거나 push 하고 렌더링
// 3. 없거나 동일하면 no

  
  
  return (
    <div className='posts'>
      <div className='postHeader'>
        <h1>Posts</h1>
        <span>포스팅 전체보기</span>
        <span>포스팅 주제별</span>
      </div>
      <div className='postList'>
        {
          posts.map(post => { return(
            <div key={post.title} className='postListBox'>
              <div className='postListDate'>{`${post.date[2]} ${post.date[1]}` }</div>
              <div className='postListLine'>
                <div className='postListLinevertial'></div>
                <div className='postListLineCircle'></div>
              </div>
              <div className='postListType'>
                <span style={handleStyle(post.type)}>{post.type}</span>
              </div>
              <div className='postListTitle'>
                <span>{post.title}</span>
              </div>
            </div>
          )})
        }
      </div>
    </div>
    
  )
}

export default Posts