import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Home.css';
import homeIcon from '../img/house.png';
function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/befor-moving-in');
  };
  return (
    <div className="home-container">
      <div className="main-content">
        <h2>안전한 집을 위한 <br/>당신만의 안내원</h2>
        <p className ="title">뭐 어때</p>
        <button className="cta-button" onClick={handleNavigate}>확인하기</button>
      </div>
      <div className="bottom-content">
      <hr/>
      <div className = "cont">
        <div className="left-text">사진 촬영으로 빠르게 확인하는 계약서 위험여부</div>
        <img src={homeIcon} alt="Home" className="nav-icon" />
        <img src={homeIcon} alt="Home" className="nav-icon" />
        <img src={homeIcon} alt="Home" className="nav-icon" />
        <div className="right-text">입주 전부터 안전하게 따라오세요</div>
        </div>
        <hr/>
      </div>
    </div>
  );
}
export default Home;







