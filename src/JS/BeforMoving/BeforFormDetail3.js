import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/BeforFormDetail.css';

function BeforFormDetail3() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="form-detail-container">


      <h2>계약 후 체크리스트</h2>

      <div className={`checklist-item ${isOpen1 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen1(!isOpen1)} className="checklist-title">
          <input type="checkbox" /> 도시가스 회사 확인하기 {isOpen1 ? '▲' : '▼'}
        </h3>
        {isOpen1 && (
          <ul>
            <li>입주 전 도시가스 전입 신청해야 할 회사를 임대인에게 미리 확인해요.</li>
          </ul>
        )}
      </div>

      <div className={`checklist-item ${isOpen2 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen2(!isOpen2)} className="checklist-title">
          <input type="checkbox" /> 계약서 사본 보관 {isOpen2 ? '▲' : '▼'}
        </h3>
        {isOpen2 && (
          <ul>
            <li>계약서는 총 2개로, 임대인과 임차인이 같은 계약서를 1장씩 나눠가져요.</li>
            <li>중요한 계약서이므로, 꼭 소중히 보관하세요.</li>
          </ul>
        )}
      </div>

      
      <div className="button-container">
        <button className="return-button" onClick={() => navigate(-1)}>
          이전
        </button>
        <button className="submit-button" onClick={() => navigate('/')}>
          확인
        </button>
      </div>

    </div>
  );
}

export default BeforFormDetail3;
