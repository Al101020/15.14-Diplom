import Logo from '../../../components/logo/Logo';

const FooterBottom = () => {

  const toTheTop = () => {
    window.location.href='#top';
  };

  return (
    <>
      <Logo />
      <p
          className='footer__to-the-top'
          title="к началу страницы"
          onClick={toTheTop}
        ></p>
      <p className='copyrights'>2026 Мельников А.В.</p>
    </>
  );
};

export default FooterBottom;
