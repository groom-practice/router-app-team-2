import React from 'react';
import './home.css';

function Home() {
  return (
    <>
      <div className="home-container">
        <h1 className="home-title">Welcome To Main Page!</h1>
        
        <div className="login-box">
          <div className="input-section">
            <label htmlFor="userId">아이디</label>
            <input
              id="userId"
              className="input"
              type="text"
              placeholder="id: test123"
            />
          </div>

          <div className="input-section">
            <label htmlFor="userPw">비밀번호</label>
            <input
              id="userPw"
              className="input"
              type="password"
              placeholder="pw: test123password"
            />
          </div>

          <div className="btn-section">
            <button className="login-btn">로그인</button>
            <button className="cancel-btn">취소</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
