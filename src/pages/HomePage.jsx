import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/header/Header';
import BodyHome from '../components/bodyHome/BodyHome';


// import Footer from '../../components/Footer/Footer';
// import { Footer } from '../components/Footer/Footer';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <BodyHome />
      <Footer />
    </>
  );
};

export default HomePage;
