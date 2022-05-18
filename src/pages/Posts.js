import React,{useState} from 'react'
import '../styles/Posts.css';



/**
 * post게시물
 * 1. 분류 : css, html, react, ...
 * 2. 작성일자 : 2022년 12월 12일
 * 3. 제목 : UseState는 어떻게 동작할까
 * 4. 내용 : 어쩌구 저쩌구
 */

function Posts() {
  const [state, setstate] = useState({
    posts: [
      {
        type : 'react',
        date : new Date('March 17, 2012 03:28:00'),
        title : 'useState 사용법',
        content : '하지만 간혹, 이 setState가 state를 변경시킨다고 오해하시는 분들이 있는거 같아서 이 글을 작성하게 되었습니다'
      }, {
        type : 'js',
        date : new Date('Decomber 17, 2002 03:28:00').toString(), 
        title : 'eventHandler 사용법',
        content : '이벤트 핸들러는 잘! 사용하면된다',
      },
    ],
  })
  const {posts} = state;
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
            <div key={post.title}>
              <span>{post.date}</span>
              <span>{post.type}</span>
              <span>{post.title}</span>
              <span>{post.content}</span>
            </div>
          )})
        }
      </div>
    </div>
    
  )
}

export default Posts