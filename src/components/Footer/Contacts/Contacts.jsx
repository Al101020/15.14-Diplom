

// {/* перенос текста на новую строку по каретке (если она есть): */}
//             {item.content.split('\n').map((line, lineIndex) => (
//               <React.Fragment key={lineIndex}>
//                 {line}
//                 {lineIndex !== item.content.split('\n').length - 1 && <br />}
//               </React.Fragment>
//             ))}

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

  return (
    <div className="footer__contacts">
      <h5 className="footer__contacts__title">Свяжитесь с нами</h5>
      <ul className="footer__Contacts">
        {items.map((item, Index) => (
          // console.log(item)
          <li className="contacts__item" key={Index}>              
            <a
              href={item.href}
              className={`contacts__link contacts__link_${item.title}`}
              title={item.title}
              target={item.target || '_self'}
            ></a>

            <span className="contacts__info">
              {/* перенос текста на новую строку по каретке (если она есть): */}
              {/* {item.content.split('\n').map((line, lineIndex) => ()} */}
              {item.content.split('\n').map((line, lineIndex) => {
                console.log(line);
                return(
                  <div key={lineIndex}>
                    {line}
                    {lineIndex !== item.content.split('\n').length - 1 && <br />}
                  </div>
                );
              })}
              {/* {item.content.split('\n').map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {line}
                  {lineIndex !== item.content.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))} */}
              </span>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Contacts;



  // return (
  //   <ul className="contacts">
  //     {items.map((item, itemIndex) => (
  //       <li className="contacts__item" key={itemIndex}>
  //         <a
  //           href={item.href}
  //           className={`contacts__link contacts__link_${item.title}`}
  //           title={item.title}
  //           target={item.target || '_self'}
  //         ></a>

          // <span className="contacts__info">
          //   {/* перенос текста на новую строку по каретке (если она есть): */}
          //   {item.content.split('\n').map((line, lineIndex) => (
          //     <React.Fragment key={lineIndex}>
          //       {line}
          //       {lineIndex !== item.content.split('\n').length - 1 && <br />}
          //     </React.Fragment>
          //   ))}
          // </span>
  //       </li>
  //     ))}
  //   </ul>
  // );



//   {/* Маппим по массиву, создавая для каждой строки соответствующий элемент */}
// lines.map((line, lineIndex) => {
//   // Возвращаем элемент: строку, а после неё — тег <br />, если это не последняя строка
//   return <div key={lineIndex}>
//     {line}
//     {lineIndex !== lines.length - 1 && <br />}
//   </div>;