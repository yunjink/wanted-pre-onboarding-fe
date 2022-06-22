import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  return (
    <>
      <Routes>
        {/* <Route element={isLogined ? <Navigation /> : <Login />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
