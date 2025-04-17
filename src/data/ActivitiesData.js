// data/activitiesData.js
export const invasiveActivities = [
    'prep skin pre-op',
    'เข้าเคสผ่าตัด',
    'ทำคลอด',
    'ทำแผล',
    'เย็บแผล',
    'ตัดชิ้นเนื้อ',
    'แทง central line/ off central line',
    'ทำแผล central line',
    'เจาะเลือด',
    'เจาะ ABG',
    'ฉีดยาIV',
    'แทง IV/ off IV',
    'วัด CVP',
    'ใส่ท่อช่วยหายใจ/ เลื่อน tube /off tube',
    'เจาะคอ/ดูดเสมหะ',
    'ใส่สาย NG/off NG',
    'เจาะท้อง/เจาะหลัง/เจาะข้อ',
    'Cystoscope',
    'ใส่/ถอดสายสวนปัสสาวะ',
    'กิจกรรม invasive อื่น',
  ];
  
  export const basicExam = [
    'ตรวจร่างกายผู้ป่วย',
    'ซักประวัติ',
  ];
  
  // ตัวอย่างข้อมูลกิจกรรมจำแนกตาม status และ moment
  export const activitiesByStatusAndMoment = {
    'อาจารย์แพทย์': {
      'Moment 1 ก่อนสัมผัสผู้ป่วย': [
        'ตรวจเยี่ยมผู้ป่วย',
        'สัมผัสตัวผู้ป่วย',
        'สัมผัสอุปกรณ์ที่สอดใส่เข้าไปในร่างกาย เช่น ET tube, IV, foley',
        'กิจกรรม non invasive อื่น',
        'วัด V/S วัดไข้ วัด BP',
      ],
      'Moment 2 ก่อนทำกิจกรรมสะอาด ปราศจากเชื้อ': invasiveActivities,
      'Moment 3 หลังสัมผัสเลือด สารคัดหลั่ง': invasiveActivities,
      'Moment 4 หลังสัมผัสผู้ป่วย': basicExam,
      'Moment 5 หลังสัมผัสสิ่งแวดล้อมผู้ป่วย': basicExam,
    },
  
    // ✅ เพิ่ม status อื่นๆ ได้ที่นี่
  };
  