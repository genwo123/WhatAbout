import React from 'react';

function BeforForm2() {
  const boxStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '10px 0',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={boxStyle}>
        <h3>첫 번째 박스</h3>
        <p>이곳에 첫 번째 박스의 내용을 추가하세요.</p>
      </div>
      <div style={boxStyle}>
        <h3>두 번째 박스</h3>
        <p>이곳에 두 번째 박스의 내용을 추가하세요.</p>
      </div>
      <div style={boxStyle}>
        <h3>세 번째 박스</h3>
        <p>이곳에 세 번째 박스의 내용을 추가하세요.</p>
      </div>
    </div>
  );
}

export default BeforForm2;
