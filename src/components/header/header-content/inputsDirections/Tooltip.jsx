import './tooltip.css';

const Tooltip = (props) => {
  const cities = props.cities;
  const onClickA = props.onClickA;
  // const parentInp1 = props.parentInp1;
  
  // console.log(parentInp1);
  // const input = parentInp1.querySelector('.input_direction');
  // console.log(input);

  if (cities.length === 0 ) {
    return (
      <>
        <div className='tooltip'>Начните вводить</div>
      </>    
    );
  } else if (cities.length > 0 ) {
    console.log('cities.length > 0 ');
    return (
      <>
        {cities.map((city, idC) => (
          <div key={idC}>
            <a href='#' id={city.id} onClick={onClickA}>{city.name}</a>
            <div style={{ display: 'none' }}>{city._id}</div>
          </div>
        ))}
      </> 
    );
  } else {
    return (
      <>
        <p>Сработала последняя "Else"</p>
      </>
    );
  };
};

export default Tooltip;



{/* <div className='input-direction' style={{ position: 'relative' }}>
          {cities.map((city, idC) => (
            <div key={idC}>
              <a href='#' id={city.id} onClick={onClickA}>{city.name}</a>
              <div style={{ display: 'none' }}>{city._id}</div>
            </div>
          ))}
        </div> */}



// // Функции для показа и скрытия
// const openTooltip = (e) => {
//   const tooltip = document.createElement('span');
//   tooltip.setAttribute('role', 'tooltip');
//   tooltip.setAttribute('inert', true); // Скрываем до подключения к DOM
//   tooltip.textContent = e.target.getAttribute('data-tooltip');
//   tooltip.classList.add('active');
//   e.target.appendChild(tooltip);
// };

// const closeTooltip = (e) => {
//   const tooltip = e.target.querySelector('[role=tooltip]');
//   tooltip.classList.remove('active');
// };

// // Привязываем обработчики к каждому триггеру
// triggers.forEach(trigger => {
//   trigger.addEventListener('mouseenter', openTooltip);
//   trigger.addEventListener('mouseleave', closeTooltip);
// });


