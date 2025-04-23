// screens/HandwashStepsScreen.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';
import './HandwashStepsScreen.css';

const steps = [
  "Step1: ฟอกฝ่ามือและง่ามนิ้วมือด้านหน้า",
  "Step2: ฟอกหลังมือและง่ามนิ้วมือด้านหลัง",
  "Step3: ฟอกนิ้วและข้อนิ้วมือด้านหลัง",
  "Step4: ฟอกนิ้วหัวแม่มือ ทั้ง 2 ข้าง",
  "Step5: ฟอกปลายนิ้วมือ ทั้ง 2 ข้าง",
  "Step6: ฟอกรอบข้อมือ ทั้ง 2 ข้าง"
];

export default function HandwashStepsScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  // evaluator อาจไม่จำเป็นในหน้านี้ เนื่องจากยังไม่ได้ถูกเลือก
  const { status, moment, activity, method, quality } = location.state || {};

  console.log("Received in HandwashStepsScreen:", location.state);

  const [answers, setAnswers] = useState({});

  const handleSelect = (index, value) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmit = () => {
    const unansweredSteps = steps.filter((_, index) => answers[index] === undefined);

    if (unansweredSteps.length > 0) {
      alert(`กรุณาเลือกผลการประเมินสำหรับขั้นตอนที่ยังไม่ได้ตอบ`);
      return;
    }

    const stepResults = {};
    steps.forEach((_, index) => {
      stepResults[`step${index + 1}`] = answers[index];
    });

    console.log("Step results before navigation:", stepResults);

    // ส่งข้อมูลไปที่หน้า EvaluatorScreen
    navigate('/evaluator', {
      state: {
        status,
        moment,
        activity,
        method,
        quality,
        stepResults
      }
    });
  };

  return (
    <div className="screen-container">
      <h2 className="title">ระบุขั้นตอนที่ทำถูก / ไม่ถูก</h2>

      {steps.map((step, index) => (
        <div key={index} className="step-item">
          <p className="step-label">{step}</p>
          <div className="button-group">
            <button
              className={`select-button ${answers[index] === "ถูกต้อง" ? "correct" : ""}`}
              onClick={() => handleSelect(index, "ถูกต้อง")}
            >
              ถูกต้อง
            </button>
            <button
              className={`select-button ${answers[index] === "ไม่ถูกต้อง" ? "incorrect" : ""}`}
              onClick={() => handleSelect(index, "ไม่ถูกต้อง")}
            >
              ไม่ถูกต้อง
            </button>
          </div>
        </div>
      ))}

      <GreenButton
        title="ยืนยัน"
        onPress={handleSubmit}
      />

    </div>
  );
}