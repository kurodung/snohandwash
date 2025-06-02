// screens/HandwashQualityScreen.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton'; 

export default function HandwashQualityScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // รับค่าจากหน้าก่อนหน้า
  const { status, department, moment, activity, method } = location.state || {};  

  // ตัวเลือกคุณภาพขึ้นกับวิธีการล้างมือ
  const qualityOptions = {
    'Hand rub': [
      'ครบ 6 ขั้นตอน / surgical hand rub ถูกต้อง',
      'ไม่ครบ 6 ขั้นตอน / surgical hand rub ไม่ถูกต้อง'
    ],
    'Hand wash': [
      'ครบ 6 ขั้นตอน / surgical hand wash ถูกต้อง',
      'ไม่ครบ 6 ขั้นตอน / surgical hand wash ไม่ถูกต้อง'
    ],
    'ไม่ทำความสะอาดมือ': [
      'ไม่ได้ล้างมือเลย'
    ]
  };

  const options = qualityOptions[method] || [];

  return (
    <div className="screen-container">
      <h1 className="header-text">คุณภาพการล้างมือ ({method})</h1>

      <div className="button-container">
        {options.map((option, index) => (
          <GreenButton
            key={index}
            title={option}
            onPress={() => {
              // ถ้าเลือก "ไม่ครบ 6 ขั้นตอน" → ไปที่หน้าเลือก step
              if (option.includes("ไม่ครบ 6 ขั้นตอน")) {
                navigate('/handwash-steps', {
                  state: { status, department, moment, activity, method, quality: option }
                });
              }
              // ถ้าเลือก "ไม่ได้ล้างมือเลย" หรือ "ครบ 6 ขั้นตอน" → ไปหน้าผู้ประเมิน
              else {
                navigate('/evaluator', {
                  state: { status, department, moment, activity, method, quality: option }
                });
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}
