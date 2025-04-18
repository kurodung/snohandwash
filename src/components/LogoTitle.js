import React from 'react';
import './LogoTitle.css'; // นำเข้าไฟล์ CSS
import logo from './logo-nso.jpg'; // ใช้ path เดียวกับที่ไฟล์จริงอยู่

export function LogoTitle() {
  return (
    <div className="logo-container">
      <img src={logo} alt="logo" className="logo-image" />
      <div className="title-container">
        <div className="title">แบบประเมินการล้างมือ</div>
        <div className="subtitle">โรงพยาบาลมหาราชนครศรีธรรมราช</div>
      </div>
    </div>
  );
}
