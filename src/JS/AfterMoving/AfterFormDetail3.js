import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/AfterFormDetail.css';

function AfterFormDetail3() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="form-detail-container">

      <h2>입주 후 체크리스트</h2>

      <div className={`checklist-item ${isOpen1 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen1(!isOpen1)} className="checklist-title">
          <input type="checkbox" /> 확정 일자 받기 전, 등기부등본 확인 {isOpen1 ? '▲' : '▼'}
        </h3>
        {isOpen1 && (
          <ul>
            <li>등기부등본 확인 후 문제 없을 경우, 잔금을 입금해요.</li>
            <li>만약 부동산에 새로운 권리관계 변동이 생겼다면, 
              임차인은 잔금을 지급하지 않고 계약을 재검토하거나, 계약을 철회하는 등의 조치를 취할 수 있기 때문이에요. 잔금을 지급한 후에는 임차인이 권리를 주장하기 어려운 경우가 많기 때문에, 변동 사항이 없는지 확인하는 것이 매우 중요해요. </li>
          </ul>
        )}
      </div>

      <div className={`checklist-item ${isOpen2 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen2(!isOpen2)} className="checklist-title">
          <input type="checkbox" />KB국민은행, 하나은행, 케이뱅크 앱에서 등기부등본 변동 알림 신청
        </h3>
        
      </div>


      <div className={`checklist-item ${isOpen3 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen3(!isOpen3)} className="checklist-title">
          <input type="checkbox" />이사 후 최대한 빨리 전입신고를 하고, 확정일자 받기{isOpen2 ? '▲' : '▼'}
        </h3>
        {isOpen3 && (
          <ul>
            <li>이사 당일 정부24 사이트 또는 주민센터에서 확정일자 및 전입신고를 진행해야 보증금을 보호받을 수 있어요. </li>
            <li>임대차 신고는 부동산거래관리시스템 사이트 또는 주민센터에서 계약 체결 후 30일 이내에 신고해야 해요. (임대차 신고 시에는 확정일자가 자동으로 부여됩니다)</li>
          </ul>
        )}
      </div>

      <div className={`checklist-item ${isOpen4 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen4(!isOpen4)} className="checklist-title">
          <input type="checkbox" />보증금 반환보증 보험 가입{isOpen2 ? '▲' : '▼'}
        </h3>
        {isOpen4 && (
          <ul>
            <li>주택도시보증공사(HUG), 서울보증보험(SGI), 주택금융공사(HF) 등에서 보증금을 보증 보험에 가입하면 사고 발생 시에 보증금을 보호받을 수 있어요.</li>
            </ul>
        )}
      </div>

      
      <div className="button-container">
        <button className="return-button" onClick={() => navigate(-1)}>
          이전
        </button>
        <button className="submit-button" onClick={() => navigate('/after-form-1-detail')}>
          확인
        </button>
      </div>
    </div>
  );
}

export default AfterFormDetail3;
