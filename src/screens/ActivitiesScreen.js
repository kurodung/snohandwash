// screens/ActivitiesScreen.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';

export default function ActivitiesScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { status, moment } = location.state || {};

  // ✅ ตัวอย่างข้อมูลกิจกรรมที่แยกตาม status และ moment
  const activitiesByStatusAndMoment = {
    'อาจารย์แพทย์': {
      'Moment 1 ก่อนสัมผัสผู้ป่วย': [
        'ตรวจเยี่ยมผู้ป่วย',
        'สัมผัสตัวผู้ป่วย',
        'สัมผัสอุปกรณ์ที่สอดใส่เข้าไปในร่างกาย เช่น ET tube, IV, foley',
        'กิจกรรม non invasive อื่น',
        'วัด V/S วัดไข้ วัด BP'
      ],
      'Moment 2 ก่อนทำกิจกรรมสะอาด ปราศจากเชื้อ': [
        'prep skin pre-op',
        'เข้าเคสผ่าตัด',
        'ทำคลอด',
        'ทำแผล',
        'เย็บแผล',
        'ตัดชิ้นเนื้อ',
        'แทง central line/ off central line',
        'ทำแผล central line',
        'เจาะเลือด',
        'เจาะ ABG',
        'ฉีดยาIV',
        'แทง IV/ off IV',
        'วัด CVP',
        'ใส่ท่อช่วยหายใจ/ เลื่อน tube /off tube',
        'เจาะคอ/ดูดเสมหะ',
        'ใส่สาย NG/off NG',
        'เจาะท้อง/เจาะหลัง/เจาะข้อ',
        'ใส่สาย NG/off NG',
        'ใส่สาย NG/off NG',
        'ใส่สาย NG/off NG',
        'ใส่สาย NG/off NG',

        
      ],
      'Moment 3 หลังสัมผัสเลือด สารคัดหลั่ง': [
        'ตรวจร่างกายผู้ป่วย',
        'ซักประวัติ',
      ],
      'Moment 4 หลังสัมผัสผู้ป่วย': [
        'ตรวจร่างกายผู้ป่วย',
        'ซักประวัติ',
      ],
      'Moment 5 หลังสัมผัสสิ่งแวดล้อมผู้ป่วย': [
        'ตรวจร่างกายผู้ป่วย',
        'ซักประวัติ',
      ],
      
    },
    'พนักงานเปล': {
      'Moment 1 ก่อนสัมผัสผู้ป่วย': [
        'ช่วยย้ายผู้ป่วย',
        'เข็นเปล',
      ],
      'Moment 2 ก่อนทำกิจกรรมสะอาด ปราศจากเชื้อ': [
        'ช่วยพาผู้ป่วยเข้าห้องผ่าตัด',
      ],
      // ... Moment อื่นๆ
    },
    // 🔁 เพิ่ม status อื่นๆ ได้ที่นี่
  };

  // ✅ เลือกกิจกรรมที่ตรงกับ status และ moment
  const activities = activitiesByStatusAndMoment[status]?.[moment] || [];

  return (
    <div className="screen-container">
      <h1 className="header-text">กิจกรรมใน {moment} ({status})</h1>
      <div className="button-container">
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <GreenButton
              key={index}
              title={activity}
              onPress={() =>
                navigate('/handwashing-method', {
                  state: { status, moment, activity },
                })
              }
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>
            ไม่มีกิจกรรมในสถานะและ Moment นี้
          </p>
        )}
      </div>
    </div>
  );
}
