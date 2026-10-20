// import './Feedback.css';

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
]

const Feedback = () => {
  return (
    <div className='feedback'>
      <h3>Отзывы</h3>
      <ul className='feedbacks__visible'>
        {Feedbacks.map((Feedback, idF) => (
          // console.log(idF);
          // console.log(Feedback)
          <li className='feedbacks__li' key={idF}>
            <img src={Feedback.src} />
            <div>
              <div>{Feedback.user}</div>
              <div>{Feedback.text}</div>
            </div>
          </li>
))}
      </ul>
    </div>
  );
};

export default Feedback;