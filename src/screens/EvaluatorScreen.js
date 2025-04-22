// screens/EvaluatorScreen.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';

export default function EvaluatorScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  // เพิ่ม stepResults ในการรับค่า
  const { status, moment, activity, method, quality, stepResults } = location.state || {};
  
  // เพื่อการ debug
  console.log("Received in EvaluatorScreen:", location.state);
  
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
              // เพิ่ม stepResults ในการส่งค่า
              state: { status, moment, activity, method, quality, evaluator, stepResults } 
            })}
          />
        ))}
      </div>
    </div>
  );
}