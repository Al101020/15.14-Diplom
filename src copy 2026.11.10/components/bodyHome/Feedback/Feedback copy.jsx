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
  {
    user: 'Ещё один - 3', 
    text: 'СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.',
    src: user1
  },
]

let currentIndex = 0;

const Feedback = () => {
  
  const [theReviewsShown, setTheReviewsShown] = useState([
    FeedbacksList[0],
    FeedbacksList[1],
  ]);
  const [activePoint, setActivePoint] = useState(0);

  function showReview(i) {
    

    if (FeedbacksList.length === 0) return; // - на всякий случай
    
    if (i < FeedbacksList.length - 1) { // если i < arr.length - 1
      currentIndex = i;
      setTheReviewsShown([
        FeedbacksList[currentIndex],
        FeedbacksList[currentIndex + 1],
      ]);
    } else if (i <= 4) { // если i <= 4
      currentIndex = i;
      setTheReviewsShown([
        FeedbacksList[currentIndex],
        FeedbacksList[0],
      ]);
    } else if (i >= 4) { // если i >= 4
      i = 0               // ограничили показ
      currentIndex = i;
      setTheReviewsShown([
        FeedbacksList[currentIndex],
        FeedbacksList[currentIndex + 1],
      ]);
    };
    setActivePoint(currentIndex);
    currentIndex = i + 1;
  }

  useEffect(() => {
    // showReview(currentIndex);

    // Запускаем таймер
    const timeoutId = setTimeout(() => {
      // Здесь ваша логика (например, запрос к API или обновление состояния)
      console.log('Таймер сработавал!');
      const interval = setInterval(() => {
        showReview(currentIndex);
      }, 5000); // Интервал 5 секунды
      return () => clearInterval(interval); // Очистка при размонтировании
    }, 5000); // 5000 мс = 5 секунды
    return () => clearTimeout(timeoutId);

    // const interval = setInterval(() => {
    //   showReview(currentIndex);
    // }, 5000); // Интервал 5 секунды
    // return () => clearInterval(interval); // Очистка при размонтировании

  }, []);



  // useEffect(() => {
  //   // Запускаем таймер
  //   const timeoutId = setTimeout(() => {
  //     // Здесь ваша логика (например, запрос к API или обновление состояния)
  //     console.log('Таймер сработавал!');
  //   }, 5000); // 5000 мс = 5 секунды

  //   // Функция очистки: отменяем таймер, если компонент размонтируется или эффект повторно запущен
  //   return () => clearTimeout(timeoutId);
  // }, [theReviewsShown]); // Пустой массив зависимостей означает, что эффект запустится только один раз — при первом рендере




  return (
    <div className='feedback'>
      <h3>Отзывы</h3>
      <div className='feedbacks__visible' id='feedbacks-div'>
        {theReviewsShown.map((Feedback, idF) => (
          <div className='feedbacks-item' key={idF}>
            <img src={Feedback.src} className='feedbacks-item-img' />
            <div>
              <div>{Feedback.user}</div>
              <div>{Feedback.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='feedbacks-points'>
        {[...Array(5)].map((point, idP) => (<div
          className={`feedbacks-point${
            idP === activePoint ? ' feedbacks-point_active' : ''
          }`} 
          key={idP}
          onClick={() => showReview(idP)}
        ></div>))}
      </div>
    </div>
  );
};

export default Feedback;
