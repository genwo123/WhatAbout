import React from 'react';
import { useNavigate } from 'react-router-dom';

function AfterForm3() {
  const navigate = useNavigate();

  return (
    <div className="after-form-box">
      <h3>세 번째 박스</h3>
      <p>이곳에 세번째 박스의 내용을 추가하세요.</p>
      <button onClick={() => navigate('/after-form-3-detail')}>상세보기</button>
    </div>
  );
}

export default AfterForm3;
