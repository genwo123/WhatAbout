import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';
import homeIcon from '../img/house.png';
import contractIcon from '../img/document.png';  // 예시 이미지 경로
import moveInIcon from '../img/truck.png';  // 예시 이미지 경로
import Upload from '../img/upload.png'

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <img src={homeIcon} alt="Home" className="nav-icon" />
          </Link>
        </li>
        <li>
          <Link to="/befor-moving-in">
            <img src={contractIcon} alt="Contract" className="nav-icon" />
          </Link>
        </li>
        <li>
          <Link to="/after-moving-in">
            <img src={moveInIcon} alt="MoveIn" className="nav-icon" />
          </Link>
        </li>
        <li>
          <Link to="/Upload">
            <img src={Upload} alt="MoveIn" className="nav-icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
