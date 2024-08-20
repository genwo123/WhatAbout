import React, { Component } from 'react';
import AfterForm1 from './AfterMoving/AfterForm1';
import AfterForm2 from './AfterMoving/AfterForm2';
import AfterForm3 from './AfterMoving/AfterForm3';
import '../CSS/AfterForm.css';  // CSS 파일을 임포트

class AfterMovingIn extends Component {
  render() {
    return (
      <div>
        
        <div className="after-moving-container"> {/* 클래스 추가 */}
          <AfterForm1 />
          <AfterForm2 />
          <AfterForm3 />
        </div>
      </div>
    );
  }
}

export default AfterMovingIn;
