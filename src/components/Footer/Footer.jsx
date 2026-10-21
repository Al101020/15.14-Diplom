import './footer.css';
import Contacts from './Contacts/Contacts';
import Subscription from './Subscription/Subscription';
import FooterBottom from './FooterBottom/FooterBottom';

const Footer = () => {
  // const btnClick = (e) => {
  //   console.log(e.target);
  // }
  return (
    <>
      <div className='footer'>
        <Contacts />
        <Subscription />
      </div>
      <div className='footer__bottom'>
        <FooterBottom />
      </div>
    </>
    
  );
}

export default Footer;