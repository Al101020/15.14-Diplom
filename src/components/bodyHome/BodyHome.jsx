import './bodyHome.css';

import AboutUs from "./AboutUs/AboutUs";
import HowItWorks from "./HowItWorks/HowItWorks";
import Feedback from "./Feedback/Feedback";
import Footer from '../../components/Footer/Footer';

const BodyHome = () => {
  return (
    <div className='body-home'>
      <AboutUs />
      <HowItWorks />
      <Feedback />
      <Footer />
    </div>
  );
};

export default BodyHome;
