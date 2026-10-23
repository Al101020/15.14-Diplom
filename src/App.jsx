import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from './components/header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage';

import './App.css';

export const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
)};
