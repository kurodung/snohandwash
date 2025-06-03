// screens/DepartmentScreen.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';

const departments = [
  'หอผู้ป่วยศัลยกรรม',
  'หอผู้ป่วยอายุรกรรม',
  'ห้องฉุกเฉิน',
  'ห้องคลอด',
  'ห้องผ่าตัด',
  'ห้องปฏิบัติการ',
  'แผนกผู้ป่วยนอก',
  'อื่นๆ',
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
