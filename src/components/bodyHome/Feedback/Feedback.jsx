// Отзывы
import { useEffect, useState } from 'react';

import user1 from '../../../assets/user-1.png';
import user2 from '../../../assets/user-2.png';

const FeedbacksList = [
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

let currentIndex = 0;

const Feedback = () => {
  const [theReviewsShown, setTheReviewsShown] = useState([
    FeedbacksList[0],
    FeedbacksList[1],
  ]);

  
  function showReview(i) {
    if (FeedbacksList.length === 0) return; // - на всякий случай
    
    if (i < FeedbacksList.length - 1) { // если i < 3
      currentIndex = i;
      console.log(currentIndex);

      setTheReviewsShown([
        FeedbacksList[currentIndex],
        FeedbacksList[currentIndex + 1],
      ]);
    } else if (i <= FeedbacksList.length - 1) { // если i <= 3
      currentIndex = i;
      console.log(currentIndex);

      setTheReviewsShown([
        FeedbacksList[currentIndex],
        FeedbacksList[0],
      ]);
    } else if (i >= FeedbacksList.length) { // если i >= 4
      i = 0
      currentIndex = i;
      console.log(currentIndex);

      setTheReviewsShown([
        FeedbacksList[currentIndex],
        FeedbacksList[currentIndex + 1],
      ]);
    };
    
    currentIndex = i + 1;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      
      showReview(currentIndex);
    }, 5000); // Интервал 5 секунды

  // Очистка при размонтировании
  return () => clearInterval(interval);
  }, []);

  return (
    <div className='feedback'>
      <h3>Отзывы</h3>
      <div className='feedback-useEffect'></div>
      <div className='feedbacks__visible' id='feedbacks-div'>
        {theReviewsShown.map((Feedback, idF) => (
          <div className='feedbacks__item' key={idF}>
            <img src={Feedback.src} />
            <div>
              <div>{Feedback.user}</div>
              <div>{Feedback.text}</div>
            </div>
          </div>
        ))}
      </div>
      {/* <ul className='feedbacks__visible'>
        {theReviewsShown.map((Feedback, idF) => (
          <li className='feedbacks__li' key={idF}>
            <img src={Feedback.src} />
            <div>
              <div>{Feedback.user}</div>
              <div>{Feedback.text}</div>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Feedback;