import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/BeforFormDetail.css';

function BeforFormDetail2() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="form-detail-container">
      <button className="back-button" onClick={() => navigate('/befor-moving-in')}>
        되돌리기
      </button>

      <h2>계약전 체크리스트</h2>

      <div className={`checklist-item ${isOpen1 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen1(!isOpen1)} className="checklist-title">
          <input type="checkbox" /> 등록된 정식 공인중개사가 맞는지 확인 {isOpen1 ? '▲' : '▼'}
        </h3>
        {isOpen1 && (
          <ul>
            <li>국가공간정보포털에서 공인중개사무소 찾기로 확인하세요</li>
            <li>임대차 계약서에는 사전 계약된 내용이 반영되어야 합니다</li>
          </ul>
        )}
      </div>

      <div className={`checklist-item ${isOpen2 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen2(!isOpen2)} className="checklist-title">
          <input type="checkbox" /> 등록된 정식 공인중개사가 맞는지 확인 {isOpen2 ? '▲' : '▼'}
        </h3>
        {isOpen2 && (
          <ul>
            <li>확인되지 않은 중개인을 통해 거래 시 법적 보호를 받을 수 없습니다</li>
            <li>공인중개사 자격증을 확인하고, 공인된 사무소에서 계약하세요</li>
          </ul>
        )}
      </div>

      <div className={`checklist-item ${isOpen3 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen3(!isOpen3)} className="checklist-title">
          <input type="checkbox" /> 등록된 정식 공인중개사가 맞는지 확인 {isOpen3 ? '▲' : '▼'}
        </h3>
        {isOpen3 && (
          <ul>
            <li>임대 물건의 상태를 확인하고, 사진을 첨부해 증거로 남기세요</li>
            <li>서류상에 모든 조건이 명확히 기재되어 있는지 확인하세요</li>
          </ul>
        )}
      </div>
      
      <div className="button-container">
        <button className="return-button" onClick={() => navigate(-1)}>
          이전
        </button>
        <button className="submit-button">
          확인
        </button>
      </div>

    </div>
  );
}

export default BeforFormDetail2;
