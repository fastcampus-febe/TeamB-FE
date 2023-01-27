import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div>dsfsdf</div>
      <Outlet />
    </RecoilRoot>
  );
}

export default App;
