import React from 'react';
import './../CSS/Result.css';  // Import the CSS file

function Result() {
  const score = 90;
  const items = [
    { score: 20, item: "기본 정보의 정확성" },
    { score: 18, item: "법적 효력" },
    { score: 15, item: "특약 사항의 완성도" },
    { score: 14, item: "양측 권리와 의무의 명확성" },
    { score: 13, item: "기타 중요한 조항" },
  ];

  return (
    <div className="result-container">
      <h1 className="result-title">계약서 검사 결과</h1>
      <div className="score">{score}점</div>
      <div className="table-container">
        <table className="result-table">
          <thead>
            <tr>
              <th>점수</th>
              <th>항목</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.score}</td>
                <td>{item.item}</td>
              </tr>
            ))}
            <tr className="large-row">
              <td colSpan="2">이 계약서는 전반적으로 매우 잘 작성된 계약서로, 기본 정보의 정확성, 법적 효력, 양측 권리와 의무의 명확성에서 높은 점수를 받았습니다. 특약 사항과 기타 중요한 조항 부분에서도 일부 추가가 필요할 수 있지만, 전체적으로 매우 높은 점수를 받을 수 있는 계약서입니다.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Result;
