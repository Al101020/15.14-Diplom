import { Route, Routes } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

import HomePage from './pages/HomePage';

import './App.css';

export const App = () => {
  // const dispatch = useDispatch();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
)};
