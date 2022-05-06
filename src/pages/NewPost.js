import React from 'react'
import '../styles/NewPost.css';
import { useRef } from 'react';
import { useNavigate} from 'react-router-dom';
import Posts from './Posts';

function NewPost() {
  const navigate = useNavigate();
  const title = useRef();
  const content = useRef();

  const ClickCreateBtn = () => {
    //TODO : 작성한 내용 배열에 저장
    console.dir(Posts);
    Posts.setKey(Posts.key + 1);
    Posts.setPost([...Posts.post, {
      'id': Posts.key,
      'title': title.current.value,
      'content': content.current.value,
    }]);
    navigate('/posts');
  }


  return (
    <div className='newPost'>
      <h1>New Post!</h1>
      <div className='newPostHeader'>
        <div>제목:</div>
        <input ref={title} type='text' className='newPostTitle'/>
      </div>
      <div className='newPostFooter'>
        <div>내용:</div>
        <input ref={content} type='text' className='newPostContent'/>
      </div>
      <input type='button' value='Create' className='newPostBtn' onClickCapture={ClickCreateBtn}/>
    </div>
  )
}

export default NewPost