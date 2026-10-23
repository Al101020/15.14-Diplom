// Отзывы
import './Feedback.css'; 

import user1 from '../../../assets/user-1.png';
import user2 from '../../../assets/user-2.png';

// console.log('feedback');
const Feedbacks = [
  {
    user: 'Екатерина Вальнова', 
    text: 'Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.',
    src: user1
  },
  {
    user: 'Евгений Стрыкало', 
    text: 'СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.',
    src: user2
  },
    {
    user: 'Ещё один - 1', 
    text: 'Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.',
    src: user1
  },
  {
    user: 'Ещё один - 2', 
    text: 'СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.',
    src: user2
  },
]

const Feedback = () => {
  let currentIndex = 0;

  function showReview(index) {
    const items = document.getElementsByClassName('review__items');

    if (items.length === 0) return; // если массив пустой, то выход

    if (index >= items.length) index = 0; // если index больше ли равно длины массива, то начинай сначала.
    if (index < 0) index = items.length - 1; // если index < 0, то последний в массиве

    for (let i = 0; i < items.length; i++) { // цикл
      items[i].style.display = (i === index || i === index + 1) ? 'block' : 'none';
    }

    currentIndex = index;
  }

  function nextReview() {
    showReview(currentIndex + 1);
  }

  function previousReview() {
    showReview(currentIndex - 1);
  }

  window.onload = function () {
    showReview(0);
  };

  return (
    <div className='feedback'>
      <h3>Отзывы</h3>
      <ul className='feedbacks__visible review'>
        {Feedbacks.map((Feedback, idF) => (
          // console.log(idF);
          // console.log(Feedback)
          <li className='feedbacks__li review__items' key={idF}>
            <img src={Feedback.src} />
            <div>
              <div>{Feedback.user}</div>
              <div>{Feedback.text}</div>
            </div>
          </li>
        ))}
      </ul>
      <button className='prev review__button'  onClick={previousReview} id='prev review__button'>Предыдущий</button>
      <button className='next review__button' onClick={nextReview} id='next review__button'>Следующий</button>
      {/* <!-- Опционально: индикаторы точек --> */}
      <div className='indicator'></div>
    </div>
  );
};

export default Feedback;