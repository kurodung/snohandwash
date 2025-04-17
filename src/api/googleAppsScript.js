// api/googleAppsScript.js
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyitNE0uaRqmNR9BUQmGFrJBS0mIwQRIvYvRfLD_2BHBQLUFNXxfF24PCl-VCtBkbRn-A/exec';

/**
 * ส่งข้อมูลไปยัง Google Apps Script web app และบันทึกลง Google Sheets
 * @param {Object} data ข้อมูลที่จะบันทึก
 * @returns {Promise} คำตอบจาก Google Apps Script
 */
export async function submitHandwashingData(data) {
    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // เปลี่ยนจาก 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow', // เพิ่มตัวเลือกนี้
        mode: 'cors' // เพิ่มตัวเลือกนี้
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error submitting to Google Apps Script:', error);
      throw error;
    }
  }