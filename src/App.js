import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StatusScreen from './screens/StatusScreen';
import MomentsScreen from './screens/MomentsScreen';
import ActivitiesScreen from './screens/ActivitiesScreen';
import HandwashingMethodScreen from './screens/HandwashingMethodScreen';
import HandwashQualityScreen from './screens/HandwashQualityScreen';
import EvaluatorScreen from './screens/EvaluatorScreen';
import SuggestionScreen from './screens/SuggestionScreen';

import { LogoTitle } from './components/LogoTitle'; // ✅ นำเข้าหัวข้อ

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <LogoTitle /> {/* ✅ วางตรงนี้เพื่อให้แสดงบนทุกหน้า */}
        <Routes>
          <Route path="/" element={<Navigate to="/status" />} />
          <Route path="/status" element={<StatusScreen />} />
          <Route path="/moments" element={<MomentsScreen />} />
          <Route path="/activities" element={<ActivitiesScreen />} />
          <Route path="/handwashing-method" element={<HandwashingMethodScreen />} />
          <Route path="/handwash-quality" element={<HandwashQualityScreen />} />
          <Route path="/evaluator" element={<EvaluatorScreen />} />
          <Route path="/suggestion" element={<SuggestionScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

