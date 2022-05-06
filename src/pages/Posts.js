import React, { useRef, useState, useEffect } from 'react'
import '../styles/Posts.css';
import NewPost from './NewPost';
import { useNavigate} from 'react-router-dom';

/**
 * post게시물
 * 1. 분류 : css, html, react, ...
 * 2. 작성일자 : 2022년 12월 12일
 * 3. 제목 : UseState는 어떻게 동작할까
 * 4. 내용 : 어쩌구 저쩌구
 */

function Posts() {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [key, setKey] = useState(0);
  const testvalue = 23;
  
  
  
  useEffect(() => {
    //초기값 설정
  const initiatePost = () => {
    setKey({
      'id': '1',
      'title': 'React에서 Timeout 구현하기',
      'content': '모바일 지원이 가능한 React 용 탭으로 편집 할 수 있습니다. 이다 React JavaScript 용 탭 기반 API. 예제 페이지에서 세 가지 테마 중에서 선택하고 "문서"버튼을 눌러 Github로 이동할 수 있습니다. 수행 할 수있는 모든 사용자 정의를 보여주는 동일한 예제 페이지에 있습니다.',
    })
  }
  },)
  


  //화면에 뿌리기
  const displayPost = () => {
    setKey(key + 1);
    setPost([...post, {
      'id': key,
      'title': NewPost.title,
      'content':NewPost.content,
    }]);
    console.log(post);
    console.log(React.version);//?
  }

  // TODO : 삭제
  const deletePost = () => {

}


  return (
    <div className='posts'>
      Posts 페이지 입니다
      <input type='button' value='new' onClick={() => navigate(`/NewPost`)}/>
      <div>
        {post.map(item => (<div key= {item.key} className='postList'>
          {item.content}
        </div>))}
      </div>
    </div>
    
  )
}

export default Posts