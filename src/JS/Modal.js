import React from 'react';
import './../CSS/Modal.css'; // Make sure this CSS file is properly linked

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>모델 상세 평가 기준</h2>
        <table className="criteria-table">
          <thead>
            <tr>
              <th>항목</th>
              <th>점수 기준</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>기본 정보의 정확성 (20점 만점)</td>
              <td>
                <ul>
                  <li>20점: 계약서에 기재된 모든 정보가 정확하게 입력됨.</li>
                  <li>15-19점: 대부분의 정보가 정확하나, 일부 사소한 오류가 있음.</li>
                  <li>10-14점: 여러 개의 오류가 있으나 전반적인 내용 이해 가능.</li>
                  <li>0-9점: 중요한 정보가 틀리거나 누락됨.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>법적 효력 (20점 만점)</td>
              <td>
                <ul>
                  <li>20점: 모든 서명과 도장이 정확하게 기재됨.</li>
                  <li>15-19점: 서명 및 도장이 대부분 확인되었으나, 일부가 명확하지 않음.</li>
                  <li>10-14점: 서명 또는 도장이 누락되었거나 불완전함.</li>
                  <li>0-9점: 서명과 도장이 없어 법적 효력을 상실함.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>특약 사항의 완성도 (20점 만점)</td>
              <td>
                <ul>
                  <li>20점: 모든 특약 사항이 상세하고 명확하게 포함됨.</li>
                  <li>15-19점: 중요한 특약 조항들이 대부분 포함되었으나, 일부 추가가 필요함.</li>
                  <li>10-14점: 특약이 일부만 포함되었으며, 중요 조항이 누락됨.</li>
                  <li>0-9점: 특약 사항이 거의 없거나 누락됨.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>양측 권리와 의무의 명확성 (20점 만점)</td>
              <td>
                <ul>
                  <li>20점: 임대인과 임차인의 권리와 의무가 명확하게 정의됨.</li>
                  <li>15-19점: 대부분 명확히 정의되었으나 일부 모호한 부분이 있음.</li>
                  <li>10-14점: 권리와 의무가 부분적으로만 정의되어 있음.</li>
                  <li>0-9점: 권리와 의무가 거의 정의되지 않음.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>기타 중요한 조항 (20점 만점)</td>
              <td>
                <ul>
                  <li>20점: 추가 조항이 충분히 포함되어 있음.</li>
                  <li>15-19점: 대부분의 중요한 조항이 포함되었으나, 몇 가지 추가가 필요함.</li>
                  <li>10-14점: 중요한 조항들이 일부 누락되어 있음.</li>
                  <li>0-9점: 기타 중요한 조항이 거의 없거나 부족함.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Modal;
