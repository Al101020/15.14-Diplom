import './menu.css';

import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link
            to="/#about"
            className="menu__link"
          >
            О нас
          </Link>
        </li>
        <li className="menu__item">
          <Link
            to="/#about"
            className="menu__link"
          >
            Как это работает
          </Link>
        </li>
        <li className="menu__item">
          <Link
            to="/#about"
            className="menu__link"
          >
            Отзывы
          </Link>
        </li>
        <li className="menu__item">
          <Link
            to="/#about"
            className="menu__link"
          >
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
