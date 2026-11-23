import './tooltip.css';

const Tooltip = (props) => {
  const cities = props.cities;
  const onClickA = props.onClickA;

  if (cities.length === 0 ) {
    return (
      <div className='tooltip'>
        <div className='tooltip__info'>Начните вводить</div>
      </div>    
    );
  } else if (cities.length > 0 ) {
    // console.log(cities);
    return (
      <ul className='tooltip'>
        {cities.map((city, idC) => (
          <li key={idC}>
            <div
              className='tooltip__city-name'
              id={city.id} 
              onClick={onClickA}
              >{city.name}</div>
            <div style={{ display: 'none' }}>{city._id}</div>
          </li>
        ))}
      </ul> 
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
