import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import StatusScreen from './screens/StatusScreen';
import MomentsScreen from './screens/MomentsScreen';
import ActivitiesScreen from './screens/ActivitiesScreen';
import HandwashingMethodScreen from './screens/HandwashingMethodScreen';
import HandwashQualityScreen from './screens/HandwashQualityScreen';
import EvaluatorScreen from './screens/EvaluatorScreen';
import SuggestionScreen from './screens/SuggestionScreen';
import HandwashStepsScreen from './screens/HandwashStepsScreen';

import { LogoTitle } from './components/LogoTitle';
import { BackButton } from './components/BackButton';

import './App.css';

function AppContent() {
  const location = useLocation();
  const noBackButtonRoutes = ['/', '/status'];

  const showBackButton = !noBackButtonRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      <LogoTitle />
      {showBackButton && <BackButton />} {/* ✅ แสดงปุ่มเฉพาะหน้าที่ไม่อยู่ในรายการ */}
      <Routes>
        <Route path="/" element={<Navigate to="/status" />} />
        <Route path="/status" element={<StatusScreen />} />
        <Route path="/moments" element={<MomentsScreen />} />
        <Route path="/activities" element={<ActivitiesScreen />} />
        <Route path="/handwashing-method" element={<HandwashingMethodScreen />} />
        <Route path="/handwash-quality" element={<HandwashQualityScreen />} />
        <Route path="/evaluator" element={<EvaluatorScreen />} />
        <Route path="/handwash-steps" element={<HandwashStepsScreen />} />
        <Route path="/suggestion" element={<SuggestionScreen />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
