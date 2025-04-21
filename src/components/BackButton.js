import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import './BackButton.css';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="custom-back-button" onClick={() => navigate(-1)}>
      <IoChevronBack className="back-icon" />
      <span className="back-text">ย้อนกลับ</span>
    </div>
  );
}

