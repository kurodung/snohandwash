// screens/StatusScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';

export default function StatusScreen() {
  const navigate = useNavigate();
  
  const statuses = [
    'อาจารย์แพทย์',
    'นักศึกษาแพทย์',
    'พยาบาล',
    'ผู้ช่วยพยาบาล',
    'นักศึกษาพยาบาล / ผู้ช่วยเหลือคนไข้',
    'พนักงานทำความสะอาด',
    'พนักงานเปล',
    'นักกายภาพบำบัด',
    'เจ้าหน้าที่ x-ray',
    'เจ้าหน้าที่ห้อง lab',
    'อื่นๆ'
  ];

  return (
    <div className="screen-container">
      <h1 className="header-text">สถานะบุคลากร</h1>
      <div className="button-container">
        {statuses.map((status, index) => (
          <GreenButton
            key={index}
            title={status}
            onPress={() => navigate('/moments', { state: { status } })}
          />
        ))}
      </div>
    </div>
  );
}
