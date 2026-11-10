import SubscriptionSocials from './SubscriptionSocials';

const Subscription = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const email = event.target.querySelector('.footer-subscription__form__input').value;
    console.log(email);
    event.target.querySelector('.footer-subscription__form__input').value = '';
  };

  return (
    <div className='footer-subscription'>
      <h5 className='footer-subscription__title'>Подписка</h5>{/* <h4 className='footer__title'>Подписка</h4> */}
      <p className='footer-subscription__text'>Будьте в курсе событий</p>
      <form className='footer-subscription__form' onSubmit={handleSubmit}>
        <input
          type='email'
          className='footer-subscription__form__input'
          placeholder='e-mail'
          required
        />
        <button type='submit' className='footer-subscription__form__btn'>
          Отправить
        </button>
      </form>
      <div className='footer-subscription__socials'>
        <h5 className='footer-subscription__socials__title'>Подписывайтесь на нас</h5>
        <SubscriptionSocials />
      </div>
    </div>
  );
};

export default Subscription;
