// screens/DepartmentScreen.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';


const departments = [
  'ER', 'OPD', 'NICU', 'PICU', 'CCU', 'MICU 1', 'RCU', 'MICU 2', 'SICU 1', 'SICU 2', 'SICU 3', 'ICU CVT', 'ห้องคลอด', 'ห้องผ่าตัด',
  'ODS', 'วิสัญญี', 'อายุรกรรม 3', 'อายุรกรรม 4', 'อายุรกรรม 5', 'อายุรกรรม 6', 'SEMI ICU', 'พิเศษอายุรกรรม 3', 'พิเศษอายุรกรรม 4', 'พิเศษอายุรกรรม 5', 'พิเศษอายุรกรรม 6', 'Stroke unit', 'Onco', 'ศัลยกรรมชาย 1',
  'ศัลยกรรมชาย 2', 'ศัลยกรรมหญิง 1', 'ศัลยกรรมหญิง 2','พิเศษ 2', 'พิเศษ 3', 'พิเศษ 4', 'พิเศษ 5', 'พิเศษ 6', 'พิเศษ 7', 'หลังคลอด', 'นรีเวช', 'เฉลิมพระบารมี 2', 'เฉลิมพระบารมี 3,4', 'ปาริชาต', 'SNB', 'กุมารเวชกรรม 1', 'กุมารเวชกรรม 2',
  'ศัลยกรรมกระดูกหญิง', 'ศัลยกรรมกระดูกชาย', 'EENT', 'พิเศษ EENT', 'Cath Lab', 'ส่องกล้อง', 'ไตเทียม', 'เคมีบำบัด', 'รังสีรักษา', 'รังสีร่วมรักษา', 'เวชศาสตร์นิวเคลียร์', 'Echo', 'ตรวจการนอนหลับ', 'ตรวจสมรรถภาพปอด', 

];

export default function DepartmentScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { status } = location.state || {};
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelect = (department) => {
    navigate('/moments', {
      state: { status, department },
    });
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (trimmed) {
      handleSelect(trimmed);
    }
  };

  const filteredDepartments = departments.filter((dep) =>
    dep.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="screen-container">
      <h1 className="header-text">เลือกหน่วยงาน (Department)</h1>

      <form onSubmit={handleInputSubmit} className="search-form">
        <input
          type="text"
          placeholder="พิมพ์ชื่อหน่วยงาน"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </form>

      <div className="button-container">
        {filteredDepartments.map((dep, index) => (
          <GreenButton
            key={index}
            title={dep}
            onPress={() => handleSelect(dep)}
          />
        ))}
      </div>
    </div>
  );
}
