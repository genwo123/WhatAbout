import React, { Component } from 'react';
import BeforForm1 from './BeforMoving/BeforForm1';
import BeforForm2 from './BeforMoving/BeforForm2';
import BeforForm3 from './BeforMoving/BeforForm3';
import '../CSS/BeforForm.css';  // CSS 파일을 임포트



class BeforMovingIn extends Component {
  render() {
    return (
      <div>
        <h1 className="highlight-title">계약과정</h1>
        <p className = "sub">차근차근 확인하고 계약해요!</p>
        <div className="befor-moving-container"> {/* 클래스 추가 */}
          <BeforForm1 />
          <BeforForm2 />
          <BeforForm3 />
        </div>
      </div>
    );
  }
}

export default BeforMovingIn;

