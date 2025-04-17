import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';

export default function HandwashQualityScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { status, moment, activity, method } = location.state || {};
  
  // ตัวเลือกคุณภาพจะต่างกันตามวิธีการล้างมือ
  const qualityOptions = {
    'Hand rub': [
      'ครบ 7 ขั้นตอน / surgical hand rub ถูกต้อง',
      'ไม่ครบ 7 ขั้นตอน / surgical hand rub ไม่ถูกต้อง'
    ],
    'Hand wash': [
      'ครบ 7 ขั้นตอน / surgical hand wash ถูกต้อง',
      'ไม่ครบ 7 ขั้นตอน / surgical hand wash ไม่ถูกต้อง'
    ],
    'ไม่ทำความสะอาดมือ': [
      'ไม่ได้ล้างมือเลย'
    ]
  };

  // เลือกตัวเลือกคุณภาพตามวิธีการที่เลือก
  const options = qualityOptions[method] || [];

  return (
    <div className="screen-container">
      <h1 className="header-text">คุณภาพการล้างมือ: {method}</h1>
      <div className="button-container">
        {options.map((option, index) => (
          <GreenButton
            key={index}
            title={option}
            onPress={() => navigate('/evaluator', { 
              state: { status, moment, activity, method, quality: option } 
            })}
          />
        ))}
      </div>
    </div>
  );
}