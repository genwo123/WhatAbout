import React from 'react';
import './../CSS/Result.css';  // Import the CSS file

function Result() {
  const score = 90;
  const items = [
    { score: 20, item: "Item 1" },
    { score: 18, item: "Item 2" },
    { score: 15, item: "Item 3" },
    { score: 14, item: "Item 4" },
    { score: 13, item: "Item 5" },
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
              <td colSpan="2">~~~</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Result;
