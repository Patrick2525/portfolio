import React,{useState, useEffect} from 'react'
import '../styles/SubCategory.css';
function SubCategory() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = () => {
      setLoading(true);
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setPosts(res);
          console.log(posts);
        });
      setLoading(false);
    }
    
    fetchPosts();
  }, [])
  
  console.log('렌더링');
  //get current posts
  const indexOfLastPost = currentPage * postsPerPage; // 현재보고있는창의 마지막 게시물 index
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 현재 보고있는창의 첫번째 게시물 index
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // 현재 띄워줄 페이지 전체 배열

  const pageNumbers = [];
  for(let i = 1;i <=Math.ceil(posts.length / postsPerPage); i++){
    pageNumbers.push(i);
  }  

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className='subCategory'>
      { loading || currentPosts.map(post => (
        <div key={post.id} className='list-group-item'>
          {post.title}
        </div>
      ))}

      {
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} href="#" className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default SubCategory