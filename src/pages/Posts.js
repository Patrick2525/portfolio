import { faChessBoard } from '@fortawesome/free-solid-svg-icons';
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
        date : new Date('January 17, 2019 03:28:00').toDateString().split(' '), 
        title : 'useState 사용법',
        content : 'useState는 잘! 사용하면된다'
      }, {
        type : 'js',
        date : new Date('January 28, 2019 03:28:00').toDateString().split(' '), 
        title : 'eventHandler 사용법',
        content : '이벤트 핸들러는 잘! 사용하면된다',
      }, {
        type : 'html',
        date : new Date('March 2, 2019 03:28:00').toDateString().split(' '), 
        title : 'html 꿀팁1',
        content : 'semantic 태그 활용법',
      }, {
        type : 'html',
        date : new Date('June 17, 2019 03:28:00').toDateString().split(' '), 
        title : 'html 꿀팁2',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다. 그런데 저는 지금까지 자바스크립트로 개발하면서 메모리를 직접 해제해 본 기억이 없었습니다. 과연 자바스크립트는 어떤 방식으로 메모리를 해제하는 걸까요? (이 글은 v8 엔진 기준으로 작성하였습니다)',
      },{
        type : 'css',
        date : new Date('August 21, 2019 03:28:00').toDateString().split(' '), 
        title : 'css UI1',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다. 그런데 저는 지금까지 자바스크립트로 개발하면서 메모리를 직접 해제해 본 기억이 없었습니다. 과연 자바스크립트는 어떤 방식으로 메모리를 해제하는 걸까요? (이 글은 v8 엔진 기준으로 작성하였습니다)',
      },{
        type : 'html',
        date : new Date('September 12, 2019 03:28:00').toDateString().split(' '), 
        title : 'html 꿀팁3',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'css',
        date : new Date('October 11, 2019 03:28:00').toDateString().split(' '), 
        title : 'css UI2',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{ 
        type : 'React',
        date : new Date('Decomber 17, 2019 03:28:00').toDateString().split(' '), 
        title : 'useRef 사용법',
        content : 'useRef는 잘! 사용하면된다',
      }, { //2020----------------------------------------------------------------------
        type : 'html',
        date : new Date('January 17, 2020 03:28:00').toDateString().split(' '), 
        title : 'ptag 사용법',
        content : 'ptag는 잘! 사용하면된다',
      }, {
        type : 'html',
        date : new Date('January 2, 2020 03:28:00').toDateString().split(' '), 
        title : 'html 꿀팁4',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'html',
        date : new Date('February 14, 2020 03:28:00').toDateString().split(' '), 
        title : 'html 꿀팁5',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'css',
        date : new Date('March 22, 2020 03:28:00').toDateString().split(' '), 
        title : 'css UI3',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'css',
        date : new Date('April 28, 2020 03:28:00').toDateString().split(' '), 
        title : 'css UI4',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'js',
        date : new Date('April 27, 2020 03:28:00').toDateString().split(' '), 
        title : '자바스크립트 v8 엔진의 가비지 컬렉션 동작 방식',
        content : '잘 작동한다',
      },{
        type : 'js',
        date : new Date('April 28, 2020 03:28:00').toDateString().split(' '), 
        title : 'js 에러 핸들링 하는 법1',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'html',
        date : new Date('May 3, 2020 03:28:00').toDateString().split(' '), 
        title : 'html 꿀팁6',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'js',
        date : new Date('June 2, 2020 03:28:00').toDateString().split(' '), 
        title : 'js 모듈 이슈',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'css',
        date : new Date('June 13, 2020 03:28:00').toDateString().split(' '), 
        title : 'css UI5',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'js',
        date : new Date('July 22, 2020 03:28:00').toDateString().split(' '), 
        title : '머신러닝 모델로 동네생활 신고 업무 자동화하기',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'css',
        date : new Date('August 25, 2020 03:28:00').toDateString().split(' '), 
        title : 'css UI6',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'css',
        date : new Date('October 7, 2020 03:28:00').toDateString().split(' '), 
        title : '웹에서 다크모드 지원하기',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'js',
        date : new Date('November 8, 2020 03:28:00').toDateString().split(' '), 
        title : 'TypeScript를 활용한 서비스개발',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'css',
        date : new Date('December 28, 2020 03:28:00').toDateString().split(' '), 
        title : 'css UI7',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'css',
        date : new Date('Decomber 17, 2020 03:28:00').toDateString().split(' '), 
        title : 'flexbox 사용법',
        content : 'flexbox는 잘! 사용하면된다',
      }, {
        type : 'React',
        date : new Date('Decomber 17, 2020 03:28:00').toDateString().split(' '), 
        title : 'container 사용법',
        content : 'container는 잘! 사용하면된다',
      }, { //2021----------------------------------------------------------------------
        type : 'React',
        date : new Date('January 17, 2021 03:28:00').toDateString().split(' '), 
        title : 'JSX 사용법',
        content : 'JSX는 잘! 사용하면된다',
      },{
        type : 'html',
        date : new Date('February 2, 2021 03:28:00').toDateString().split(' '), 
        title : 'html 꿀팁7',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'React',
        date : new Date('February 4, 2021 03:28:00').toDateString().split(' '), 
        title : 'Suspense와 선언적으로 Data fetching처리',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'js',
        date : new Date('February 4, 2021 03:28:00').toDateString().split(' '), 
        title : 'js 에러 핸들링 하는 법2',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'React',
        date : new Date('March 15, 2021 03:28:00').toDateString().split(' '), 
        title : '사용자 경험과 성능 개선 방법',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'html',
        date : new Date('April 22, 2021 03:28:00').toDateString().split(' '), 
        title : 'html 꿀팁8',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'React',
        date : new Date('May 20, 2021 03:28:00').toDateString().split(' '), 
        title : '리액트로 만든 게임에 사운드 추가하기',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'js',
        date : new Date('June 29, 2021 03:28:00').toDateString().split(' '), 
        title : 'js 에러 핸들링 하는 법3',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'React',
        date : new Date('July 1, 2021 03:28:00').toDateString().split(' '), 
        title : 'React에서 서버 데이터를 최신으로 관리하기(React Query, SWR)',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'js',
        date : new Date('August 14, 2021 03:28:00').toDateString().split(' '), 
        title : 'js 에러 핸들링 하는 법4',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'React',
        date : new Date('September 19, 2021 03:28:00').toDateString().split(' '), 
        title : 'Runtime 환경 변수 설정으로 빌드 프로세스 개선하기',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'js',
        date : new Date('September 30, 2021 03:28:00').toDateString().split(' '), 
        title : 'js 에러 핸들링 하는 법5',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'css',
        date : new Date('October 9, 2021 03:28:00').toDateString().split(' '), 
        title : 'css UI8',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'html',
        date : new Date('November 18, 2021 03:28:00').toDateString().split(' '), 
        title : 'html 꿀팁9',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'js',
        date : new Date('December 20, 2021 03:28:00').toDateString().split(' '), 
        title : 'js 에러 핸들링 하는 법6',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },{
        type : 'React',
        date : new Date(', 2021 03:28:00').toDateString().split(' '), 
        title : '아토믹 디자인을 활용한 디자인 시스템 도입기',
        content : '자바스크립트 데이터 타입에 관심이 생김에 따라 자연스럽게 메모리 공간의 확보와 참조 그리고 해제를 공부했습니다. C 언어 같은 저수준 언어는 free() 함수를 통해 개발자가 수동으로 메모리를 해제해야 합니다.',
      },
    ],
  })
  const {posts} = state;
  const [stateShow, setStateShow] = useState({
    postsShow : posts,
  });
  const {postsShow} = stateShow; 
  const currnetYear = useRef('');
  const handleTypeStyle = (type) => {
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

  const handleYearStyle = (post) => {
    const year = post.date[3];
    const id = post.title;
    if(year === '' || year !== currnetYear.current) {
      currnetYear.current = year;
      return {display : 'block'};
    }
  }

  const TypeSelected = useRef(0);
  const handleSelect = (e) => {
    currnetYear.current='';
    switch(e.target.selectedIndex) {
      case 0:
        break;
      case 1: //HTML
        TypeSelected.current = 'html';
        break;
      case 2: //CSS
        TypeSelected.current = 'css';
        break;
      case 3: //JS
        TypeSelected.current = 'js';
        break;
      case 4: //React
        TypeSelected.current = 'React';
        break;
    }
    setStateShow({
      postsShow: posts.filter(post => post.type === TypeSelected.current)
    })
  }
  
  const [selectedAll, setSelectedAll] = useState(true);
  const [selectedType, setSelectedType] = useState(false);
  const [visibleSelect, setvisibleSelect] = useState(false); // 수정
  const [styleHeaderAll, setStyleHeaderAll] = useState({});
  const [styleHeaderType, setStyleHeaderType] = useState({});

  const handleAllSelected = () => { //all 버튼 클릭시
    if(!selectedAll){ // type => all
      setSelectedAll(true);
      setStyleHeaderAll({
        fontSize: '20px',
        color: 'black',
        fontWeight: 'bold',
        cursor: 'default',
      });
      setStyleHeaderType({
        fontSize: '13px',
        color: 'rgb(199,199,199)',
        fontWeight: 'normal',
        cursor: 'pointer',
      })
      setSelectedAll(true);
      setSelectedType(false);
      setvisibleSelect(false);
      setStateShow({
        postsShow: posts,
      });
    } 
  }

  const handleTypeSelected = () => { // All버튼 클릭시
    if(!selectedType) { // all-> type
      setStyleHeaderType({
        fontSize: '20px',
        color: 'black',
        fontWeight: 'bold',
        cursor: 'default',
      })
      setStyleHeaderAll({
        fontSize: '13px',
        color: 'rgb(199,199,199)',
        fontWeight: 'normal',
        cursor: 'pointer',
      })
      setSelectedType(true);
      setSelectedAll(false);
      setvisibleSelect(true);
    }
  }
  
  const contentEx = useRef({});
  const [styleContent, setStyleContent] = useState({});
  const handleContent = () => {
    
  }


  return (
    <div className='posts'>
      <div className='postHeader'>
        <h1>Posts</h1>
        <span className='postHeaderAll' style={styleHeaderAll} onClick={handleAllSelected}>ALL</span>
        <span className='postHeaderType' style={styleHeaderType} onClick={handleTypeSelected}>Type</span>
        {visibleSelect && <select className='postTypeSelector' onChange={handleSelect}>
          <option value='none'>=== 선택 ===</option>
          <option value='html'>HTML</option>
          <option value='css'>CSS</option>
          <option value='js'>JS</option>
          <option value='React'>React</option>
        </select>}
      </div>
      <div className='postList'>
        {
          postsShow.map(post => { return(
            <div key={post.title} >
              <div style={handleYearStyle(post)} className='postListYear'>
                <div className='postListYearTitle'>{post.date[3]}</div>
                <div className='postListYearCircle'></div>
              </div>
              <div className='postListBox' onClick={handleContent}>
                <div className='postListDate'>{`${post.date[2]} ${post.date[1]}` }</div>
                <div className='postListLine'>
                  <div className='postListLinevertial'></div>
                  <div className='postListLineCircle'></div>
                </div>
                <div className='postListType'>
                  <span style={handleTypeStyle(post.type)}>{post.type}</span>
                </div>
                <div className='postListTitle'>
                  <span>{post.title}</span>
                </div>
                <div className='postListContent'>
                  <span>{post.content}</span>
                </div>
              </div>
            </div>
          )})
        }
      </div>
    </div>
    
  )
}

export default Posts