// screens/SuggestionScreen.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GreenButton } from '../components/GreenButton';
import { submitHandwashingData } from '../api/googleAppsScript';

export default function SuggestionScreen() {
  const [suggestion, setSuggestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state || {};

  const handleSubmit = async () => {
    const dataToSubmit = {
      ...formData,
      suggestion,
      timestamp: new Date().toISOString()
    };
  
    setIsSubmitting(true);
    
    console.log('Data being sent:', dataToSubmit);
  
    try {
      const result = await submitHandwashingData(dataToSubmit);

      if (result.status === 'success') {
        setIsSubmitting(false);
        alert("บันทึกสำเร็จ: ข้อมูลการประเมินถูกบันทึกเรียบร้อยแล้ว");
        navigate('/status');
      } else {
        throw new Error(result.message || "ไม่สามารถบันทึกข้อมูลได้");
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error submitting data:', error);
      alert("เกิดข้อผิดพลาด: " + (error.message || "ไม่สามารถบันทึกข้อมูลได้ กรุณาลองใหม่อีกครั้ง"));
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

        {isSubmitting && (
          <div className="spinner">
            <div>กำลังบันทึกข้อมูล...</div>
          </div>
        )}
      </div>
    </div>
  );
}