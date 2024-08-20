import React, { Component } from 'react';
import BeforForm1 from './BeforMoving/BeforForm1';
import BeforForm2 from './BeforMoving/BeforForm2';
import BeforForm3 from './BeforMoving/BeforForm3';

class BeforMovingIn extends Component {
  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: '20px',
      padding: '20px',
    };

    return (
      <div>
        <h1>입주 후 확인 사항</h1>
        <div style={containerStyle}>
          <BeforForm1 />
          <BeforForm2 />
          <BeforForm3 />
        </div>
      </div>
    );
  }
}

export default BeforMovingIn;
