// screens/DepartmentScreen.js
import React from 'react';
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

  const handleSelect = (department) => {
    navigate('/moments', {
      state: { status, department },
    });
  };

  return (
    <div className="screen-container">
      <h1 className="header-text">เลือกหน่วยงาน (Department)</h1>
      <div className="button-container">
        {departments.map((dep, index) => (
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
