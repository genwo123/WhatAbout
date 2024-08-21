

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../../CSS/App.css';
import find from "./../../img/find.png"

const BeforForm1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/entry-before-detail');
  };

  return (
    <div className="contract-step">
       <p className ="tit">1) 계약 전</p>
      <div className="icon-container">
        <img src={find} alt="Magnifier" className="icon" />
      </div>
      <ul>
        <li>
          <span aria-label="check">✅</span>중개인 확인
        </li>
        <li>
          <span aria-label="check">✅</span>매물 확인
        </li>
        <li>
          <span aria-label="check">✅</span>임대인 확인
        </li>
      </ul>
      <button className="detail-button" onClick={() => navigate('/befor-form-1-detail')}>상세보기</button>
    </div>
  );
};

export default BeforForm1;
