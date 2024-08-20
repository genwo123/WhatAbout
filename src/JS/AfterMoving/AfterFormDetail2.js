import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../CSS/AfterFormDetail.css';

function AfterFormDetail2() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="form-detail-container">

      <h2>입주 중 체크리스트</h2>

      <div className={`checklist-item ${isOpen1 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen1(!isOpen1)} className="checklist-title">
          <input type="checkbox" /> 집 상태 사진 촬영 및 영상 녹화 {isOpen1 ? '▲' : '▼'}
        </h3>
        {isOpen1 && (
          <ul>
            <li>입주 당시의 집 상태 기록해 차후 원상 복귀 명령이나 보증금 갈취 등의 사건을 사전에 대비해 객관적인 증거 자료를 준비해요. </li>
            <li>부실 인테리어, 가구, 전자제품 및 청소 상황이 포함돼요.</li>
            <li>사진과 영상을 포함하여 총 10장 이상 업로드해주세요.</li>
          </ul>
        )}
      </div>

      <div className={`checklist-item ${isOpen2 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen2(!isOpen2)} className="checklist-title">
          <input type="checkbox" /> 전기/가스계량기 사진 촬영 {isOpen2 ? '▲' : '▼'}
        </h3>
        {isOpen2 && (
          <ul>
            <li>전력량계의 경우, 계량기 종류에 따라서 확인 방법이 다르니 주의하세요.</li>
            <li>가스계량기의 경우, 주로 건물 외벽에 있어요.</li>
            <li>전 임차인의 공과금을 내가 내는 건 억울하겠죠?</li>
          </ul>
        )}
      </div>

      <div className={`checklist-item ${isOpen3 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen3(!isOpen3)} className="checklist-title">
          <input type="checkbox" /> 청소하기 {isOpen3 ? '▲' : '▼'}
        </h3>
        {isOpen3 && (
          <ul>
            <li>세탁기의 경우, 꼭 락스나 세탁조 클리너를 사용해 내부 청소를 한 후 사용하세요.</li>
            <li>냉장고 내부의 청결 상태 및 냉각 성능도 꼭 확인하세요.</li>
            <li>에어컨의 경우, 꼭 필터 상태 및 내부 곰팡이 여부도 확인하세요!</li>
          </ul>
        )}
      </div>
      
      <div className={`checklist-item ${isOpen4 ? 'open' : ''}`}>
        <h3 onClick={() => setIsOpen4(!isOpen4)} className="checklist-title">
          <input type="checkbox" /> (선택) 계약서의 특약 사항이 잘 이행되었는지 확인해요 {isOpen4 ? '▲' : '▼'}
        </h3>
        {isOpen4 && (
          <ul>
            <li>인테리어 관련된 특약 사항이 존재하는 경우 확인해야 해요.</li>
            <li>이 외에도 임대인이 약속한 사항이 잘 이행되었는지 확인해요.</li>
          </ul>
        )}
      </div>


      <div className="button-container">
        <button className="return-button" onClick={() => navigate(-1)}>
          이전
        </button>
        <button className="submit-button" onClick={() => navigate('/after-form-3-detail')}>
          확인
        </button>
      </div>
    </div>
  );
}

export default AfterFormDetail2;
