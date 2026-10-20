import './footer.css';
import Contacts from './Contacts/Contacts';
import Subscription from './Subscription/Subscription';

const Footer = () => {
  // const btnClick = (e) => {
  //   console.log(e.target);
  // }
  return (
    <div className='footer'>
      <Contacts />
      <Subscription />
    </div>
  );
}

export default Footer;