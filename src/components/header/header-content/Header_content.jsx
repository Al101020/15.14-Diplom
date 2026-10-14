import './header_content.css';
import Heading from './Heading';
import TrainSearchForm from './TrainSearchForm';

const Header_content = () => {
  return (
    <div className='header-content'>
      <Heading />
      <TrainSearchForm />
    </div>
  );
};

export default Header_content;