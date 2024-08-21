import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../../CSS/App.css';
import check from "./../../img/check.png"


const AfterForm3 = () => {
  const navigate = useNavigate();

  return (
    <div className="contract-step">
      <p className="tit">6) 입주 후</p>
      <div className="icon-container">
        <img src={check} alt="Truck" className="icon" />
      </div>
      <ul>
        <li>
          <span role="img" aria-label="check">✅</span>신고사항 확인
        </li>
        <li>
          <span role="img" aria-label="check">✅</span>등기부 확인
        </li>
        </ul>
      <button className="detail-button" onClick={() => navigate('/after-form-3-detail')}>
        상세보기
      </button>
    </div>
  );
};

export default AfterForm3;
