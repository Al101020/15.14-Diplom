const Contacts = () => {
  const items = [
    {
      title: 'call',
      href: 'tel:8 (800) 000 00 00',
      content: '8 (800) 000 00 00',
    },
    {
      title: 'email',
      href: 'mailto:inbox@mail.ru',
      content: 'inbox@mail.ru',
    },
    {
      title: 'skype',
      href: 'skype:tu.train.tickets',
      content: 'tu.train.tickets',
    },
    {
      title: 'maps',
      href: 'https://yandex.ru/maps/?text=Москва, Московская 27-35 555 555',
      content: 'г. Москва\nул. Московская 27-35\n555 555',
      target: '_blank',
    },
  ];

  // items.map((item, Index) => {
  //   console.log(item);
  //   console.log(item.content);
  // });

  return (
    <div className="footer-contacts">
      <h5 className="footer-contacts__title" id='footer-contacts__title'>Свяжитесь с нами</h5>
      <ul className="footer-contacts__ul">
        {items.map((item, Index) => (
          // console.log(item)
          <li className="footer-contacts__li" key={Index}>              
            <a
              href={item.href}
              className={`footer-contacts__link footer-contacts__link_${item.title}`}
              title={item.title}
              target={item.target || '_self'}
            ></a>

            <span className="footer-contacts__info">
              {item.content.split('\n').map((line, lineIndex) => {// console.log(line);
                return(
                  <div key={lineIndex}>
                    {line}
                    {lineIndex !== item.content.split('\n').length - 1 && <br />}
                  </div>
                );
              })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
