// screens/ActivitiesScreen.js
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';
import { activitiesByStatusAndMoment } from '../data/ActivitiesData';

// รายการที่ข้ามเลยว่าล้างถูกหรือผิด
const skipStatuses = [
  'พนักงานเปล',
  'นักกายภาพบำบัด',
  'เจ้าหน้าที่ x-ray',
  'เจ้าหน้าที่ห้อง lab',
  'อื่นๆ',
];

export default function ActivitiesScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { status, department, moment } = location.state || {};

  // ✅ ถ้าสถานะอยู่ในรายการ skip ให้ข้ามไป handwashing-method เลย
  useEffect(() => {
    if (skipStatuses.includes(status)) {
      navigate('/handwashing-method', { state: { status, department, moment }, replace: true });
    }
  }, [status, department, moment, navigate]);

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
                  state: { status, department, moment, activity },
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
