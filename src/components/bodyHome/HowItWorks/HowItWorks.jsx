import computer from '../../../assets/computer.svg';
import earth from '../../../assets/earth.svg';
import office from '../../../assets/office.svg';

const HowItWorks = () => {
  const items = [
    { src: computer, alt: 'Удобно', text: 'Удобный заказ на сайте' },
    { src: office, alt: 'Удаленно', text: 'Нет необходимости ехать в офис' },
    { src: earth, alt: 'Выбор', text: 'Огромный выбор направлений' },
  ];

  const btnClick = (e) => {    // console.log(e.target);
    location.href='#footer-contacts__title';
  }

  return (
    <div className='how-it-works'>
      <div className='description__header'>
        <h3>Как это работает</h3>
        <button onClick={btnClick} id='btnLearnMore'>Узнать больше</button>
      </div>
      
      <ul className='description__how-it-works'>
        {items.map((item, idD) => (
          <li className="description__item" key={idD}>
            <img src={item.src} alt={item.alt} className="description__img" />
            <p className="description__text">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>);
};

export default HowItWorks;