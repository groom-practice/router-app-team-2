// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';  // 홈 페이지 컴포넌트 임포트

function App() {
  return (
    <Router>
      <div>
        <h1>리액트 앱</h1>
        
        <Routes>
          <Route path="/" element={<Home />} />  {/* 홈 페이지 라우팅 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
