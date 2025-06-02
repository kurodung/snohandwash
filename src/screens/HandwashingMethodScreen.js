// screens/HandwashingMethodScreen.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';

export default function HandwashingMethodScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { status, department, moment, activity } = location.state || {};
  
  const methods = [
    'Hand rub',
    'Hand wash',
    'ไม่ทำความสะอาดมือ'
  ];

  return (
    <div className="screen-container">
      <h1 className="header-text">การทำความสะอาดมือ</h1>
      <div className="button-container">
        {methods.map((method, index) => (
          <GreenButton
            key={index}
            title={method}
            onPress={() => navigate('/handwash-quality', { 
              state: { status, department, moment, activity, method } 
            })}
          />
        ))}
      </div>
    </div>
  );
}