import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import React_TS from './components/React-TS/React_TS';
import ReactHooks from './components/React-Hooks-TS/ReactHooks';
import Challenge from './components/React-Hooks-TS/useReducer/Challenges/Challenge';
import Challenge4 from './components/React-Hooks-TS/useReducer/Challenges/challenge-4/Challenge4';

import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<React_TS />} />
        <Route path="/ReactHooks" element={<ReactHooks />} />
        <Route path="/ReactHooks/challenge" element={<Challenge />} />
        <Route path="/ReactHooks/challenge/4" element={<Challenge4 />} />
      </Routes>
    </>
  );
}

export default App;
