import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/user/Home'

function User() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/*" element={<Page />} /> */}
      </Routes>
    </>
  );
}

export default User;

