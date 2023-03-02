import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import React_TS from './components/React-TS/React_TS';
import ReactHooks from './components/React-Hooks-TS/ReactHooks';

import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<React_TS />} />
        <Route path="/ReactHooks" element={<ReactHooks />} />
      </Routes>
    </>
  );
}

export default App;
