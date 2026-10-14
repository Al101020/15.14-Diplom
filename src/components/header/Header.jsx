import './header.css';
import Logo from './logo/Logo';
import Menu from './menu/Menu';
import Header_content from './header-content/Header_content';

//header
const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <Menu />
      <Header_content />
    </header>
  );
};

export default Header;
