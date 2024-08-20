import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/BeforFormDetail.css';

function BeforFormDetail2() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="form-detail-container">

      <h2>계약서 작성 시 주의사항</h2>

      <div className={`checklist-item ${isOpen1 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen1(!isOpen1)} className="checklist-title">
          <input type="checkbox" /> 숫자 오타 확인 {isOpen1 ? '▲' : '▼'}
        </h3>
        {isOpen1 && (
          <ul>
          </ul>
        )}
      </div>

      <div className={`checklist-item ${isOpen2 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen2(!isOpen2)} className="checklist-title">
          <input type="checkbox" /> 특약 확인 (근저당 관련, 인테리어, 옵션 수리 등) {isOpen2 ? '▲' : '▼'}
        </h3>
        {isOpen2 && (
          <ul>
            <li>추천 특약은 이런 게 있습니다
              <li>계약 당시 권리관계를 잔금일 익일까지 유지하고 위반 시 계약은 무효로 한다.</li>
              <li>잔금 납부 시 해당 부동산의 담보대출을 상환해야 한다.</li>
              <li>임대인은 계약 시점부터 만료 시까지 근저당 및 기타 제한물권을 설정하지 못한다.</li>
              <li>전세권 설정 보증보험 가입 등에 임대인이 적극 협조한다</li>
              <li>대출 불가 판정 시 본 계약은 무효로 하며 계약금 전액을 반환한다.</li>
              <li>계약 후 없던 근저당이나 집주인의 세금 체납 사실이 발견되면 계약을 해지하고 전세금을 반환한다.</li>
              <li>임차인의 임대 여부와 관계없이 계약 만료일에 따른 보증금을 즉시 반환한다.</li>
              <li>계약 물건에 대한 고장이 발생했을 때 수리 의무를 누가 부여 받는 지에 대해 명확하게 고지한다.</li>
              <li>계약을 통해 임차인에게 목적물을 인도하기 전, 해당 목적물에 대한 관리비 및 공과금을 전부 정산한 후 인도한다.</li>
            </li>
            <li>분쟁이 일어났을 때 해결 방법도 적어두면 좋아요.</li>
          </ul>
        )}
      </div>

      <div className={`checklist-item ${isOpen3 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen3(!isOpen3)} className="checklist-title">
          <input type="checkbox" /> 월세 선불/후불 여부 {isOpen3 ? '▲' : '▼'}
        </h3>
        {isOpen3 && (
          <ul>
            <li>임대 물건의 상태를 확인하고, 사진을 첨부해 증거로 남기세요</li>
            <li>서류상에 모든 조건이 명확히 기재되어 있는지 확인하세요</li>
          </ul>
        )}
      </div>
      
      <div className={`checklist-item ${isOpen4 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen4(!isOpen4)} className="checklist-title">
          <input type="checkbox" /> 부가 금액(전기, 가스, 수도요금, 관리비 등 여부) 여부 {isOpen4 ? '▲' : '▼'}
        </h3>
        {isOpen4 && (
          <ul>
            <li>관리비에 어떤 요금이 포함되는지, 임차인이 알아서 지불해야 하는 공과금 확인해야 해요.</li>
            
          </ul>
        )}
      </div>

      <div className={`checklist-item ${isOpen5 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen5(!isOpen5)} className="checklist-title">
          <input type="checkbox" /> 계약서 간인 확인 {isOpen5 ? '▲' : '▼'}
        </h3>
        {isOpen5 && (
          <ul>
            <li>두 개의 계약서를 나란히 가로로 두고 맞닿아 있는 부분에 도장을 찍어 서로 관련 있다는 것을 증명하는 날인 방법.</li>
            <li>차후에 발생할 수 있는 불미스러운 일을 더욱 확실하게 방지할 수 있어요.</li>
          </ul>
        )}
      </div>

      <div className="button-container">
        <button className="return-button" onClick={() => navigate(-1)}>
          이전
        </button>
        <button className="submit-button" onClick={() => navigate('/upload')}>
          확인
        </button>
      </div>

    </div>
  );
}

export default BeforFormDetail2;
