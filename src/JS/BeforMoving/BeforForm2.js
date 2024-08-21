import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../../CSS/App.css';
import write from "./../../img/write.png"

const BeforForm2 = () => {
  const navigate = useNavigate();

  return (
    <div className="contract-step">
        <p className ="tit">2) 계약 중</p>
      <div className="icon-container">
        <img src={write} alt="write" className="icon" />
      </div>
      <ul>
        <li>
          <span role="img" aria-label="check">✅</span> 계약사항 확인
        </li>
        <li>
          <span role="img" aria-label="check">✅</span> 분쟁예방사항 확인
        </li>
        <li>
          <span role="img" aria-label="check">✅</span> 거주 준비사항 확인
        </li>
      </ul>
      <button className="detail-button" onClick={() => navigate('/befor-form-2-detail')}>
        상세보기
      </button>
    </div>
  );
};

export default BeforForm2;
