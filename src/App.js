import img1 from './img/1.jpeg';
import img2 from './img/Resized_20221122_130409.jpeg';
import { useState } from 'react';
import style from './App.module.css'

const Work = ({work, goToggle, index, page}) => {
  return (
    <div onClick={goToggle} data-index={index}>
        <div data-index={index}>
          <h3 data-index={index}>{work.title}</h3>
          <img src={work.imgUrl} style={{width:page === "home" ? "70%":"30%"}} data-index={index}/>
          {page !== "home" ? <div data-index={index}>{work.description}</div> : null}
        </div>
      </div>
  );
}

const NavBar = ({goHome}) => {
  return (<nav><span onClick={goHome}>HOME</span></nav>);
}

function App() {
  const [page, setPage] = useState("home");

  const goHome = () => {
    setPage("home");
  }

  const goToggle = (event) => {
    console.log(event.target.dataset.index);
    setPage(event.target.dataset.index);
  }
  const works = [
    {
      imgUrl:img1,
      title:"첫 번째 테스트",
      description:"내용 : "
    },
    {
      imgUrl:img2,
      title:"두 번째 테스트",
      description:"내용 : "
    },
    {
      imgUrl:img1,
      title:"첫 번째 테스트",
      description:"내용 : "
    },
    {
      imgUrl:img2,
      title:"두 번째 테스트",
      description:"내용 : "
    },
    {
      imgUrl:img1,
      title:"첫 번째 테스트",
      description:"내용 : "
    },
    {
      imgUrl:img2,
      title:"두 번째 테스트",
      description:"내용 : "
    }
  ];
  return (
    <main>
      <NavBar goHome={goHome} />
      <h1>Rebellia</h1>
      <div className={page === "home" ? style.container : null}>
        {page === "home" ? works.map((work, index) => (
            <Work key={index} work={work} goToggle={goToggle} index={index} page={page}/>
        )) : <Work work={works[Number(page)]} index="home" page={page} goToggle={goToggle}/>}
      </div>
    </main>
  );
}

export default App;
