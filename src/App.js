import React, { useEffect, useState } from 'react';
import { Nav, Sec0, Sec1, Sec2, Sec3, Activity, Sec3Stack } from './components';
import './App.css';
import './fontface.css';
import './Colors.css';
import pattern from "img/pattern.png";
import hello from 'img/hello.svg';
import {ReactComponent as Logo} from 'img/logo.svg';


// 여기에 이미지 불러오세요 //
import banner1 from 'img/banner1.png';
import banner2 from 'img/banner2.png';
import banner3 from 'img/banner3.png';
import reactimg from 'img/react.png';
import pythonimg from 'img/python.png';
import Kotlinimg from 'img/kotlin.png';
import cimg from 'img/c.png';

const App = () => {
  const [ nav, setNav ] = useState(0);

  // 수정할 부분 (소스 수정도 가능합니다) //
    const info = {
      name: "이지혁", // 소개 란의 이름
      nameeng: "Lee JiHyuk", // 소개 란의 영문 이름
      discription: "중학생 프로그래머입니다. 친구와 팀으로 활동하며 다양한 서비스를 제작하는 중입니다.", // 소개 란의 설명
      sitediscription: <h1>미래를 향해 달려가는 개발자<br />이지혁입니다.</h1>, // 메인 화면에 표시될 텍스트
      right:  // 메인 화면 오른쪽에 표시할 것
        <div className="sec0_logo_c">

        </div>,
      nav: <div><h1>Lee JiHyuk</h1></div>, //로고 텍스트 (svg 로고를 넣는 것도 좋습니다)
      bgmode: 1 // 0이면 원래 패턴, 1이면 svg 텍스트로 설정됩니다. (텍스트 수정은 src/img/hello.svg)
    }

    const sns = [ // 소셜 네트워킹 서비스 및 GitHub 링크 추가 (Facebook, Github, YouTube, Twitter, Instagram) (순서변경 가능, 추가하는대로 늘어납니다)
      {
        name: "Facebook",
        link: "https://www.facebook.com/profile.php?id=100032409818920"
      },
      {
        name: "GitHub",
        link: "https://github.com/jihyuk0252"
      },
      {
        name: "YouTube",
        link: "https://www.youtube.com/channel/UCq4NCztdufKXuacrJ1c5iug"
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/j1hyuk_0304/"
      }
    ]

    const sec2cont = (hios) => { // 주요 활동 (3개까지 가능합니다만 소스 수정으로 더 추가할 수 있어요)
      switch (hios){ // eslint-disable-line
        case 1:
          return({
            title: <h1>디스코드 봇</h1>, // 1번 활동 제목
            content: <p>모두의 서버를 위한 디스코드봇. 인력봇🍓<br />전적 검색등의 편리한 기능을 가지고 있어요 👾</p>, // 1번 활동 내용
            link: "https://github.com/jihyuk0252/discord-bot",
            img: banner1
          })
        case 2:
          return({
            title: <h1>포트폴리오</h1>, // 2번 활동 제목
            content: <p>본 포트폴리오 이전의 포트폴리오 입니다.<br />현재는 소스코드만 저장중입니다 📄</p>, // 2번 활동 내용
            link: "https://github.com/jihyuk0252/Portfolio-2",
            img: banner2
          })
        case 3:
          return({
            title: <h1>활동이 아직 없습니다.</h1>, // 3번 활동 제목
            content: <p>활동이 아직 없습니다.<br /></p>, // 3번 활동 내용
            img: banner3
          })
      }
    };

    const activity = { // 기타 여러 활동
      act:
        <div className="sec2_all">
          <Activity 
          img={banner1} // 사진
          title="인력봇" // 제목
          content="모두의 서버를 위한 디스코드봇. 인력봇🍓." // 내용
          link="https://github.com/jihyuk0252/discord-bot" // 링크
          />
          <Activity 
          img={banner2} 
          title="포트폴리오" 
          content="현재는 소스코드만 저장중입니다 📄" 
          link="https://github.com/jihyuk0252/Portfolio-2" 
          />
        </div>
    }

    const stack = { // 스택
      stk:
        <div className="sec3_container">
          <Sec3Stack 
          nav={nav} // 건드리지 마세요
          title="React" // 제목
          content="참고로 이 포트폴리오는 React를 기반으로 만들어졌습니다." // 내용
          percent="90%" // 진행도
          color="#61dafb" // 색깔
          img={reactimg}
          />
          <Sec3Stack 
          nav={nav}
          title="Python" 
          content="Python을 이용하여 다양한 코드를 구연할 수 있습니다."
          percent="90%"
          color="green"
          img={pythonimg}
          />
          <Sec3Stack 
          nav={nav}
          title="Kotlin" 
          content="이제 막 시작한 언어입니다! 열심히 연습중 :)"
          percent="20%"
          color="orange"
          img={Kotlinimg}
          />
          <Sec3Stack 
          nav={nav}
          title="C Language" 
          content="준비중인 언어입니다!"
          percent="10%"
          color="red"
          img={cimg}
          />
        </div>
    } 


  // 끝 //

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;

    if ( winScroll <= 0 ) setNav(0);
    else if (winScroll < 300 && winScroll > 0) setNav(1);
    else if (winScroll < 600 && winScroll >= 300) setNav(2);
    else setNav(3);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)
  });

  return (
    <div className="react_body">
      <Nav nav={nav} info={info} />
      <Sec0 nav={nav} info={info} />
      <Sec1 nav={nav} info={info} sns={sns} />
      <Sec2 nav={nav} activity={activity} sec2cont={sec2cont} />
      <Sec3 nav={nav} stack={stack} />
      <div className={nav === 0 ? "sec0_bg" : "sec0_bg_in"}>
        <div className="sec0_watermark">
          <p style={{display: "inline-block", verticalAlign: "middle"}}>Powered by JiHyuk</p>
          </div>
        <div className="sec0_bg_pattern" style={{backgroundImage: info.bgmode === 0 ? `url("${pattern}")` : `url(${hello})`, opacity: info.bgmode === 0 ? "0.028" : "0.07"}}/>
      </div>
      <div className="entire_background" />
    </div>
  );
}

export default App;
