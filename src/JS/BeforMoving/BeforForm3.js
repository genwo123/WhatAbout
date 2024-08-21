import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../../CSS/App.css';
import truck from "./../../img/car.png"

const BeforForm3 = () => {
  const navigate = useNavigate();

  return (
    <div className="contract-step">
        <p className ="tit">3) 계약 후</p>
      <div className="icon-container">
        <img src={truck} alt="Truck" className="icon" />
      </div>
      <ul>
        <li>
          <span role="img" aria-label="check">✅</span> 신청사항 확인
        </li>
        <li>
          <span role="img" aria-label="check">✅</span> 보관사항 확인
        </li>
      </ul>
      <button className="detail-button" onClick={() => navigate('/befor-form-3-detail')}>
        상세보기
      </button>
    </div>
  );
};

export default BeforForm3;