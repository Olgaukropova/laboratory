import './Header.css'

function Header() {
  return (
    <section className="header">
      <p className="header__name">Электросетьстрой</p>
      <nav >
        <ul className='header__list'>
          <li className='header__list_element'>О компании</li>
          <li className='header__list_element'>Услуги</li>
          <li className='header__list_element'>Испытания</li>
          <li className='header__list_element'>Отчеты</li>
          <li className='header__list_element header__list_element-contacts'>Контакты</li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
