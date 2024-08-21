import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../CSS/Upload.css';
import Modal from './Modal.js'


function Upload() {

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
      <p className = "tit">계약서 검사</p>
      <div className="upload-box">
        {selectedFile ? (
          <p>{selectedFile.name}</p>
        ) : (
          <p>JPG, PNG 형식의 파일을 업로드해주세요
            <br/>해당 점수는 인공지능 모델이 평가한 예상 점수로 실제와는 차이가 있을 수 있습니다.
          </p>
        )}
        <input type="file" onChange={handleFileChange} />
      </div>
      <button className="upload-button" onClick={handleUploadClick}>
        사진 업로드
      </button>
      <button className='upload-next' onClick={() => navigate('/befor-form-3-detail')}>다음</button>
      <p className="upload-note" onClick={handleModalOpen}>
        모델 상세 평가 기준 보기
      </p>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h2>모델 상세 평가 기준</h2>
        <p>여기에 모델의 평가 기준에 대한 자세한 내용을 작성하세요.</p>
      </Modal>

    </div>
  );
}
export default Upload;