//screens/SuggestionScreen.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';
import { submitHandwashingData } from '../api/googleAppsScript';

export default function SuggestionScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state || {};
  const stepResults = formData.stepResults || {};
  console.log("Received in SuggestionScreen:", location.state);
  console.log("Step Results received:", stepResults);

  const [suggestion, setSuggestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    // สร้างค่า step1 ถึง step6 เสมอ (ถ้าไม่มี ให้ใช้ค่าว่าง)
    const dataToSubmit = {
      status: formData.status || '',
      moment: formData.moment || '',
      activity: formData.activity || '',
      method: formData.method || '',
      quality: formData.quality || '',
      evaluator: formData.evaluator || '',
      step1: stepResults.step1 || '',
      step2: stepResults.step2 || '',
      step3: stepResults.step3 || '',
      step4: stepResults.step4 || '',
      step5: stepResults.step5 || '',
      step6: stepResults.step6 || '',
      suggestion: suggestion || '',
      timestamp: new Date().toISOString()
    };

    console.log('ข้อมูลที่จะส่ง:', dataToSubmit);

    try {
      await submitHandwashingData(dataToSubmit);
      alert("บันทึกสำเร็จ: ข้อมูลการประเมินถูกบันทึกเรียบร้อยแล้ว");
      navigate('/status');
    } catch (error) {
      console.error('Error submitting data:', error);
      alert("เกิดข้อผิดพลาด: " + (error.message || "ไม่สามารถบันทึกข้อมูลได้ กรุณาลองใหม่อีกครั้ง"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="screen-container">
      <h1 className="header-text">ข้อเสนอแนะ</h1>
      <div className="form-container">
        <div className="summary-container">
          <p className="summary-title">สรุปข้อมูลที่จะบันทึก:</p>
          <p>สถานะ: {formData.status}</p>
          <p>Moment: {formData.moment}</p>
          <p>กิจกรรม: {formData.activity}</p>
          <p>วิธีการล้างมือ: {formData.method}</p>
          <p>คุณภาพ: {formData.quality}</p>
          <p>ผู้ประเมิน: {formData.evaluator}</p>
        </div>
        
        <textarea
          className="text-input"
          placeholder="เพิ่มข้อเสนอแนะ (ไม่บังคับ)"
          rows={5}
          onChange={(e) => setSuggestion(e.target.value)}
          value={suggestion}
        />

        <GreenButton
          title={isSubmitting ? "กำลังส่งข้อมูล..." : "บันทึกข้อมูล"}
          onPress={handleSubmit}
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
}
