// screens/ActivitiesScreen.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';
import { activitiesByStatusAndMoment } from '../data/ActivitiesData';

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

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (skipStatuses.includes(status)) {
      navigate('/handwashing-method', { state: { status, department, moment }, replace: true });
    }
  }, [status, department, moment, navigate]);

  const activities = activitiesByStatusAndMoment[status]?.[moment] || [];

  const filteredActivities = activities.filter((activity) =>
    activity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="screen-container">
      <h1 className="header-text">กิจกรรมใน {moment} ({status})</h1>

      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="search-input"
          placeholder="ค้นหากิจกรรม"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <div className="button-container">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity, index) => (
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
            ไม่มีกิจกรรมที่ตรงกับคำค้นหา
          </p>
        )}
      </div>
    </div>
  );
}
