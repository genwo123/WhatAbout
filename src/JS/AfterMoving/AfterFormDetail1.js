import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/AfterFormDetail.css';

function AfterFormDetail1() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="form-detail-container">
      <h2>입주 전 체크리스트</h2>

      <div className={`checklist-item ${isOpen1 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen1(!isOpen1)} className="checklist-title">
          <input type="checkbox" /> 임대인에게 사전 연락 {isOpen1 ? '▲' : '▼'}
        </h3>
        {isOpen1 && (
          <ul>
            <li>임대인에게 2~3일 전에 연락하여 입주일과 입주 예상 시간 알리기</li>
          </ul>
        )}
      </div>

      <div className={`checklist-item ${isOpen2 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen2(!isOpen2)} className="checklist-title">
          <input type="checkbox" />입주일에 맞춰 도시가스 전입 신청 {isOpen2 ? '▲' : '▼'}
        </h3>
        {isOpen2 && (
          <ul>
            <li>개별난방이나 가스레인지를 사용하는 경우로 한정돼요.</li>
            <li>사전에 임대인에게 도시가스 회사명과 전화번호를 받은 후 예약해요</li>
          </ul>
        )}
      </div>

      
      <div className="button-container">
        <button className="return-button" onClick={() => navigate(-1)}>
          이전
        </button>
        <button className="submit-button"onClick={() => navigate('/after-form-2-detail')}>
          확인
        </button>
      </div>

    </div>
  );
}

export default AfterFormDetail1;
