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
  
  export const basicDoc = [
    'ตรวจเยี่ยมผู้ป่วย',
    'ซักประวัติ',
    'สัมผัสตัวผู้ป่วย',
    'สัมผัสอุปกรณ์ที่สอดใส่เข้าไปในร่างกาย เช่น ET tube, IV, foley',
    ' วัด V/S วัดไข้ วัด BP ',
  ];

  export const beforetouch = ['สัมผัสสิ่งแวดล้อมในโซนผู้ป่วย']
  
  // ตัวอย่างข้อมูลกิจกรรมจำแนกตาม status และ moment
  export const activitiesByStatusAndMoment = {
    'อาจารย์แพทย์': {
      'Moment 1 ก่อนสัมผัสผู้ป่วย': basicDoc,
      'Moment 2 ก่อนทำกิจกรรมสะอาด ปราศจากเชื้อ': [...invasiveActivities,'เจาะเลือด',],
      'Moment 3 หลังสัมผัสเลือด สารคัดหลั่ง': invasiveActivities,
      'Moment 4 หลังสัมผัสผู้ป่วย': basicDoc,
      'Moment 5 หลังสัมผัสสิ่งแวดล้อมผู้ป่วย': beforetouch, 
    },

    'แพทย์ประจำบ้าน': {
      'Moment 1 ก่อนสัมผัสผู้ป่วย': basicDoc,
      'Moment 2 ก่อนทำกิจกรรมสะอาด ปราศจากเชื้อ': [...invasiveActivities,'เจาะเลือด',],
      'Moment 3 หลังสัมผัสเลือด สารคัดหลั่ง': invasiveActivities,
      'Moment 4 หลังสัมผัสผู้ป่วย': basicDoc,
      'Moment 5 หลังสัมผัสสิ่งแวดล้อมผู้ป่วย': beforetouch, 
    },

    'นักศึกษาแพทย์': {
      'Moment 1 ก่อนสัมผัสผู้ป่วย': basicDoc,
      'Moment 2 ก่อนทำกิจกรรมสะอาด ปราศจากเชื้อ': [...invasiveActivities,'เจาะเลือด',],
      'Moment 3 หลังสัมผัสเลือด สารคัดหลั่ง': invasiveActivities,
      'Moment 4 หลังสัมผัสผู้ป่วย': basicDoc,
      'Moment 5 หลังสัมผัสสิ่งแวดล้อมผู้ป่วย': beforetouch, 
    },

    'พยาบาล': {
      'Moment 1 ก่อนสัมผัสผู้ป่วย': [...basicDoc,'เจาะเลือด',],
      'Moment 2 ก่อนทำกิจกรรมสะอาด ปราศจากเชื้อ': [...invasiveActivities,'เจาะเลือด',],
      'Moment 3 หลังสัมผัสเลือด สารคัดหลั่ง': invasiveActivities,
      'Moment 4 หลังสัมผัสผู้ป่วย': basicDoc,
      'Moment 5 หลังสัมผัสสิ่งแวดล้อมผู้ป่วย': beforetouch, 
    },
  
    // ✅ เพิ่ม status อื่นๆ ได้ที่นี่
  };
  