import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../CSS/Upload.css';


function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUploadClick = () => {
    if (!selectedFile) {
      alert("파일을 선택해주세요.");
      return;
    }
    // 파일 업로드 로직을 여기에 추가하세요.
    alert(`${selectedFile.name} 파일이 업로드 되었습니다.`);
  };
  return (
    <div className="upload-container">
      <h2>인공지능 서비스</h2>
      <h1>계약서 검사</h1>
      <div className="upload-box">
        {selectedFile ? (
          <p>{selectedFile.name}</p>
        ) : (
          <p>JPG, PNG 형식의 파일을 업로드해주세요</p>
        )}
        <input type="file" onChange={handleFileChange} />
      </div>
      <button className="upload-button" onClick={handleUploadClick}>
        사진 업로드
      </button>
      <button className='upload-button' onClick={() => navigate('/befor-form-3-detail')}>다음</button>
      <p className="upload-note">
        해당 잡수는 인공지능 모델이 자체 평가한 점수로 발견하지 못한 예외가 있을 수 있습니다.
      </p>
    </div>
  );
}
export default Upload;