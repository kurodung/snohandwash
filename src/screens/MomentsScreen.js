// screens/MomentsScreen.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';

export default function MomentsScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { status, department } = location.state || {};

  const moments = [
    'Moment 1 ก่อนสัมผัสผู้ป่วย',
    'Moment 2 ก่อนทำกิจกรรมสะอาด ปราศจากเชื้อ',
    'Moment 3 หลังสัมผัสเลือด สารคัดหลั่ง',
    'Moment 4 หลังสัมผัสผู้ป่วย',
    'Moment 5 หลังสัมผัสสิ่งแวดล้อมผู้ป่วย'
  ];

  return (
    <div className="screen-container">
      <h1 className="header-text">{status} - {department}</h1>
      <div className="button-container">
        {moments.map((moment, index) => (
          <GreenButton
            key={index}
            title={moment}
            onPress={() => navigate('/activities', { state: { status, department, moment } })}
          />
        ))}
      </div>
    </div>
  );
}
