import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/BeforFormDetail.css';

function BeforFormDetail1() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="form-detail-container">


      <h2>계약전 체크리스트</h2>

      <div className={`checklist-item ${isOpen1 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen1(!isOpen1)} className="checklist-title">
          <input type="checkbox" /> 등록된 정식 공인중개사가 맞는지 확인 {isOpen1 ? '▲' : '▼'}
        </h3>
        {isOpen1 && (
          <ul>
            <li>국가공간정보포털에서 공인중개사무소 찾기로 확인하세요</li>
            <li>임대차 계약서에는 사전 계약된 내용이 반영되어야 합니다</li>
            <li>내게 집을 보여준 중개소와, 계약서에 서명하는 중개소가 서로 다르면 불법이에요</li>
          </ul>
        )}
      </div>

      <div className={`checklist-item ${isOpen2 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen2(!isOpen2)} className="checklist-title">
          <input type="checkbox" /> 물 수압 및 수질 체크 {isOpen2 ? '▲' : '▼'}
        </h3>
        {isOpen2 && (
          <ul>
            <li>부엌 싱크대 물을 틀어놓은 후, 변기 물을 내려 수압 변화 체크하세요</li>
            <li>화장실 및 싱크대 상수도 물 색깔(녹물 대비) 체크하세요</li>
          </ul>
        )}
      </div>

      <div className={`checklist-item ${isOpen3 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen3(!isOpen3)} className="checklist-title">
          <input type="checkbox" /> 집 상태 및 하자 체크 {isOpen3 ? '▲' : '▼'}
        </h3>
        {isOpen3 && (
          <ul>
            <li>집 내부의 하자(단열)와 가구들, 전자제품들의 상태(청결도-곰팡이), 냄새 등을 확인해야 해요</li>
            <li>상태가 좋지 않을 경우, 임대인과 사전에 이야기해 계약서 특약에 리모델링 관련한 내용을 약속해야 해요.</li>
          </ul>
        )}
      </div>

      <div className={`checklist-item ${isOpen4 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen4(!isOpen4)} className="checklist-title">
          <input type="checkbox" /> 계약 30분 전, 등기부등본 확인 {isOpen4 ? '▲' : '▼'}
        </h3>
        {isOpen4 && (
          <ul>
            <li>대법원 인터넷 등기소 사이트에서 등기부등본 발급할 수 있어요</li>
            <li>월세 계약서에 기재된 임대인의 정보와 등기사항 전부 증명서 내 갑구의 소유주의 정보가 일치하는지 확인하세요</li>
            <li>근저당, 가압류 등이 설정되어 있는지 확인하세요(선순위 권리관계 확인)</li>
          </ul>
        )}
      </div>

      <div className={`checklist-item ${isOpen5 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen5(!isOpen5)} className="checklist-title">
          <input type="checkbox" /> (선택) 임대인의 세금 체납여부 확인 {isOpen5 ? '▲' : '▼'}
        </h3>
        {isOpen5 && (
          <ul>
            <li>홈택스 사이트, 위택스 사이트에 접속하여 임대인의 미납 세금 여부를 확인하셔야 해요.(계약 전에는 임대인의 동의가 필요하며 계약 후에는 임대인의 동의 필요 없이 열람이 가능해요.)</li>
            </ul>
        )}
      </div>
      
      <div className="button-container">
        <button className="return-button" onClick={() => navigate(-1)}>
          이전
        </button>
        <button className="submit-button" onClick={() => navigate('/befor-form-2-detail')}>
          확인
        </button>
      </div>

    </div>
  );
}

export default BeforFormDetail1;
