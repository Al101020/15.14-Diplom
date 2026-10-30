import './header.css';
import Logo from '../../components/logo/Logo';
import Menu from './menu/Menu';
import Header_content from './header-content/Header_content';

//header
const Header = () => {
  // console.log(store.getState());
  return (
    <header className='header'>
      <div className='header-logo'>
        <Logo />
      </div>
      <Menu />
      <Header_content />
    </header>
  );
};

export default Header;
