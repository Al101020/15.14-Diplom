import Logo from '../../../components/logo/Logo';

const FooterBottom = () => {

  const toTheTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

// const FooterBottom = () => {
//   const items = [
//     { id: 1, title: 'youtube', href: 'https://www.youtube.com' },
//     { id: 2, title: 'linkedin', href: 'https://www.linkedin.com' },
//     { id: 3, title: 'google', href: 'https://accounts.google.com' },
//     { id: 4, title: 'facebook', href: 'http://facebook.com' },
//     { id: 5, title: 'twitter', href: 'https://twitter.com' },
//   ];

//   return ( // footer-subscription__socials // footer-subscription__socials
//     <div className='footer-subscription-socials'>
//       <div>Социальные сети</div>
//       <ul className='footer-subscription-socials__ul'>
//         {items.map((item) => (
//           <li className='footer-subscription-socials__item' key={item.id}>
//             <a
//               className={`footer-subscription-socials__link footer-subscription-socials__link_${item.title}`}
//               href={item.href}
//               target='_blank'
//               title={item.title}
//             ></a>
//         </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FooterBottom;