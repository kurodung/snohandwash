// screens/EvaluatorScreen.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';

export default function EvaluatorScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { status, moment, activity, method, quality } = location.state || {};
  
  const evaluators = [
    'ICWN',
    'Nurse',
    'Head Nurse',
    'ICS',
    'ICN',
    'Other'
  ];

  return (
    <div className="screen-container">
      <h1 className="header-text">ผู้ประเมิน</h1>
      <div className="button-container">
        {evaluators.map((evaluator, index) => (
          <GreenButton
            key={index}
            title={evaluator}
            onPress={() => navigate('/suggestion', { 
              state: { status, moment, activity, method, quality, evaluator } 
            })}
          />
        ))}
      </div>
    </div>
  );
}