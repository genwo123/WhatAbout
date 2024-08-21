import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../../CSS/App.css';
import truck from "./../../img/car.png"

const AfterForm2 = () => {
  const navigate = useNavigate();

  return (
    <div className="contract-step">
      <p className="tit">5) 입주 중</p>
      <div className="icon-container">
        <img src={truck} alt="Truck" className="icon" />
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
      <button className="detail-button" onClick={() => navigate('/after-form-2-detail')}>
        상세보기
      </button>
    </div>
  );
};

export default AfterForm2;
