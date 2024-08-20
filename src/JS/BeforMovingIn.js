import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Home.css';

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/before-moving-in'); // "/before-moving-in" 경로로 이동
  };

  return (
    <div className="home-container">
      <div className="main-content">
        <h2>안전한 집을 위한 당신만의 안내원</h2>
        <h1>뭐 어때</h1>
        <button className="cta-button" onClick={handleNavigate}>확인하기</button>
      </div>
      <div className="bottom-content">
        <div className="left-text">사진 촬영으로 빠르게 확인하는 계약서 위험여부</div>
        <div className="right-text">입주 전부터 안전하게 따라오세요</div>
      </div>
    </div>
  );
}

export default Home;
