// screens/ActivitiesScreen.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';
import { activitiesByStatusAndMoment } from '../data/activitiesData';

export default function ActivitiesScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { status, moment } = location.state || {};

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
