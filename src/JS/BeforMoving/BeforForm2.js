import React from 'react';
import { useNavigate } from 'react-router-dom';

function BeforForm2() {
  const navigate = useNavigate();

  return (
    <div className="befor-form-box">
      <h3>두 번째 박스</h3>
      <p>이곳에 첫 번째 박스의 내용을 추가하세요.</p>
      <button onClick={() => navigate('/befor-form-2-detail')}>상세보기</button>
    </div>
  );
}

export default BeforForm2;