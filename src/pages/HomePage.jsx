import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/header/Header' ;
import BodyHome from '../components/bodyHome/BodyHome';

const HomePage = () => {
  return (
    <>
      <Header />
      <BodyHome />
    </>
  );
};

export default HomePage;
