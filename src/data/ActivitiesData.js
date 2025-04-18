// data/activitiesData.js
export const basicDoc = [
  'ตรวจเยี่ยมผู้ป่วย',
  'ซักประวัติ',
  'สัมผัสตัวผู้ป่วย',
  'สัมผัสอุปกรณ์ที่สอดใส่เข้าไปในร่างกาย เช่น ET tube, IV, foley',
  'วัด V/S วัดไข้ วัด BP',
];

export const DocActivities = [
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

export const basicNurse = [
  'ตรวจเยี่ยมผู้ป่วย',
  'สัมผัสตัวผู้ป่วย',
  'สัมผัสอุปกรณ์ที่สอดใส่เข้าไปในร่างกาย เช่น ET tube, IV, foley',
  'เคลื่อนย้ายผู้ป่วย พลิกตัว จัดท่า',
  'วัด V/S วัดไข้ วัด BP',
  'Bed bath',
  'กิจกรรม non invasive อื่น',
];

export const NurseActiviti = [
    'ฉีดยาIV',
    'เจาะเลือด',
    'ทำแผล central line',
    'แทง IV/ off IV',
    'เปลี่ยน IV fluid/เตรียม IV fluid',
    'ให้เลือด/ off เลือด',
    'วัด CVP',
    'วัด Tidal volume',
    'ดูดเสมหะ',
    'เปลี่ยนอุปกรณ์เครื่องช่วยหายใจ',
    'พ่นยา',
    'ใส่สาย NG/off NG',
    'ให้อาหารทางสายยาง',
    'ทำแผล',
    'เข้าเคสผ่าตัด',
    'ทำคลอด',
    'ใส่/ถอดสายสวนปัสสาวะ',
    'P care',
    'หยอดยาตา',
    'กิจกรรม invasive อื่น',
];

export const AssNurseActiviti = [
  'off IV',
  'เปลี่ยน IV fluid/เตรียม IV fluid',
  'ดูดเสมหะ',
  'เปลี่ยนอุปกรณ์เครื่องช่วยหายใจ',
  'พ่นยา',
  'off NG tube',
  'ให้อาหารทางสายยาง',
  'ช่วยทำแผล',
  'ถอดสายสวนปัสสาวะ',
  'P care',
  'ช่วยทำกิจกรรม invasive อื่น',
];

export const basicAssNurse = [
  'ตรวจเยี่ยมผู้ป่วย',
  'สัมผัสตัวผู้ป่วย',
  'สัมผัสอุปกรณ์ที่สอดใส่เข้าไปในร่างกาย เช่น ET tube, IV, foley',
  'เคลื่อนย้ายผู้ป่วย พลิกตัว จัดท่า',
  'วัด V/S วัดไข้ วัด BP',
  'Bed bath',
  'กิจกรรม non invasive อื่น',
];

export const aftertouch = ['สัมผัสสิ่งแวดล้อมในโซนผู้ป่วย']
  
  // ตัวอย่างข้อมูลกิจกรรมจำแนกตาม status และ moment
export const activitiesByStatusAndMoment = {
    'อาจารย์แพทย์': {
      'Moment 1 ก่อนสัมผัสผู้ป่วย': basicDoc,
      'Moment 2 ก่อนทำกิจกรรมสะอาด ปราศจากเชื้อ': ['เจาะเลือด',...DocActivities],
      'Moment 3 หลังสัมผัสเลือด สารคัดหลั่ง': DocActivities,
      'Moment 4 หลังสัมผัสผู้ป่วย': basicDoc,
      'Moment 5 หลังสัมผัสสิ่งแวดล้อมผู้ป่วย': aftertouch, 
},

    'แพทย์ประจำบ้าน': {
      'Moment 1 ก่อนสัมผัสผู้ป่วย': basicDoc,
      'Moment 2 ก่อนทำกิจกรรมสะอาด ปราศจากเชื้อ': ['เจาะเลือด',...DocActivities],
      'Moment 3 หลังสัมผัสเลือด สารคัดหลั่ง': DocActivities,
      'Moment 4 หลังสัมผัสผู้ป่วย': basicDoc,
      'Moment 5 หลังสัมผัสสิ่งแวดล้อมผู้ป่วย': aftertouch, 
    },

    'นักศึกษาแพทย์': {
      'Moment 1 ก่อนสัมผัสผู้ป่วย': basicDoc,
      'Moment 2 ก่อนทำกิจกรรมสะอาด ปราศจากเชื้อ': ['เจาะเลือด',...DocActivities],
      'Moment 3 หลังสัมผัสเลือด สารคัดหลั่ง': DocActivities,
      'Moment 4 หลังสัมผัสผู้ป่วย': basicDoc,
      'Moment 5 หลังสัมผัสสิ่งแวดล้อมผู้ป่วย': aftertouch, 
    },

    'พยาบาล': {
      'Moment 1 ก่อนสัมผัสผู้ป่วย': basicNurse,
      'Moment 2 ก่อนทำกิจกรรมสะอาด ปราศจากเชื้อ': ['เตรียมยาฉีด',...NurseActiviti,'เตรียม set ผ่าตัด','จัดเตรียม set sterile'],
      'Moment 3 หลังสัมผัสเลือด สารคัดหลั่ง': [...NurseActiviti,'เทปัสสาวะ','เก็บ set ต่างๆ','เก็บรวบรวมผ้าเปื้อน'],
      'Moment 4 หลังสัมผัสผู้ป่วย': basicNurse,
      'Moment 5 หลังสัมผัสสิ่งแวดล้อมผู้ป่วย': [...aftertouch,'เก็บรวบรวมผ้าเปื้อน','ทำความสะอาดสิ่งแวดล้อม']
    },
    
    'ผู้ช่วยพยาบาล': {
      'Moment 1 ก่อนสัมผัสผู้ป่วย': basicNurse,
      'Moment 2 ก่อนทำกิจกรรมสะอาด ปราศจากเชื้อ': ['จัดเตรียม set sterile',...AssNurseActiviti],
      'Moment 3 หลังสัมผัสเลือด สารคัดหลั่ง': [...AssNurseActiviti,'เทปัสสาวะ','เก็บ set ต่างๆ', 'ล้างทำความสะอาดอุปกรณ์','เก็บรวบรวมผ้าเปื้อน'],
      'Moment 4 หลังสัมผัสผู้ป่วย': basicAssNurse.filter(a => a !== 'กิจกรรม non invasive อื่น'),
      'Moment 5 หลังสัมผัสสิ่งแวดล้อมผู้ป่วย': [...aftertouch,'เก็บรวบรวมผ้าเปื้อน','ทำความสะอาดสิ่งแวดล้อม']
    },
    // ✅ เพิ่ม status อื่นๆ ได้ที่นี่
  };
  