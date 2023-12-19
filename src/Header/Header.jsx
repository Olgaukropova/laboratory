import './Header.css';
// import { Link } from 'react-router-dom';


function Header() {
  return (
    <section className="header">
      <p className="header__name">Электросетьстрой</p>
      <nav className='header__nav'>
        <ul className='header__list'>
          <li className='header__list_element'>
            <a href="#heading" className='header__list_element'>О компании</a>

          </li>
          <li className='header__list_element'>
            <a href="#services" className='header__list_element'>Услуги</a>
          </li>
          <li className='header__list_element'>
            <a href="#trials" className='header__list_element'>Испытания</a>
          </li>
          <li className='header__list_element'>
            <a href="#documents" className='header__list_element'>Отчеты</a>
          </li>
          <li className='header__list_element header__list_element-contacts'>
            <a href="#contacts" className='header__list_element-contacts'>Контакты</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
