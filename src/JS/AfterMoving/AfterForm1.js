import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../../CSS/App.css';
import find from "./../../img/find.png"

const AfterForm1 = () => {
  const navigate = useNavigate();

  return (
    <div className="contract-step">
      <p className="tit">4) 입주 전</p>
      <div className="icon-container">
        <img src={find} alt="Truck" className="icon" />
      </div>
      <ul>
        <li>
          <span role="img" aria-label="check">✅</span> 신청사항 확인
        </li>
        <li>
          <span role="img" aria-label="check">✅</span> 연락사항 확인
        </li>
        </ul>
      <button className="detail-button" onClick={() => navigate('/after-form-1-detail')}>
        상세보기
      </button>
    </div>
  );
};

export default  AfterForm1;
