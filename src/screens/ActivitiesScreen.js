// screens/ActivitiesScreen.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';

export default function ActivitiesScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { status, moment } = location.state || {};
  
  // กิจกรรมจะแตกต่างกันไปตาม Moment ที่เลือก
  const activitiesByMoment = {
    'Moment 1 ก่อนสัมผัสผู้ป่วย': [
      'ตรวจเยี่ยมผู้ป่วย',
      'สัมผัสตัวผู้ป่วย',
      'สัมผัสอุปกรณ์ที่สอดใส่เข้าไปในร่างกาย เช่น ET tube, IV, foley',
      'กิจกรรม non invasive อื่น',
      'วัด V/S วัดไข้ วัด BP'
    ],
    'Moment 2 ก่อนทำกิจกรรมสะอาด ปราศจากเชื้อ': [
      'ทำแผล',
      'ใส่สายสวนปัสสาวะ',
      'ดูดเสมหะ',
      'ฉีดยา',
      'เจาะเลือด'
    ],
    'Moment 3 หลังสัมผัสเลือด สารคัดหลั่ง': [
      'เจาะเลือด',
      'ดูแลแผล',
      'ดูดเสมหะ',
      'ล้างอุปกรณ์',
      'จัดการขยะ'
    ],
    'Moment 4 หลังสัมผัสผู้ป่วย': [
      'ตรวจเยี่ยมผู้ป่วย',
      'วัด V/S',
      'ช่วยเคลื่อนย้ายผู้ป่วย',
      'สัมผัสตัวผู้ป่วย',
      'ทำกายภาพบำบัด'
    ],
    'Moment 5 หลังสัมผัสสิ่งแวดล้อมผู้ป่วย': [
      'เปลี่ยนผ้าปูเตียง',
      'ปรับอุปกรณ์การแพทย์',
      'สัมผัสราวกั้นเตียง',
      'ทำความสะอาดพื้นผิว',
      'บันทึกข้อมูลข้างเตียงผู้ป่วย'
    ]
  };

  // เลือกกิจกรรมตาม Moment ที่เลือก หรือใช้รายการว่างถ้าไม่มี
  const activities = activitiesByMoment[moment] || [];

  return (
    <div className="screen-container">
      <h1 className="header-text">กิจกรรมใน {moment} ({status})</h1>
      <div className="button-container">
        {activities.map((activity, index) => (
          <GreenButton
            key={index}
            title={activity}
            onPress={() => navigate('/handwashing-method', { 
              state: { status, moment, activity } 
            })}
          />
        ))}
      </div>
    </div>
  );
}