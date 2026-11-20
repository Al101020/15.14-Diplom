import { useEffect, useState } from 'react';// import { useSelector } from 'react-redux';

import Input from './Input/Input';
import Tooltip from './tooltip';

// let parentInp1 = null;

const InputsDirection1 = (props) => {  // console.log(props); 
  //
  const [showTooltip, setShowTooltip] = useState(false);
  //
  const setInputWhereFrom__value = props.setInputWhereFrom;
  const cities = props.cities;

  const handleChangeWhere = (e) => {
    setInputWhereFrom__value(e.target.value);
    // parentInp1 = e.target.parentElement;
  };

  const props1 = {
    id: 'InputDirection1',
    placeholder: 'От куда',
    funct: {handleChangeWhere},
    functShowT: {setShowTooltip},
  };

  useEffect(() => {
    // console.log(cities.length);
    // console.log(parentInp1);
  }, [cities]);

  useEffect(() => {
    // console.log(cities);
    // console.log(parentInp1);
    // console.log(showTooltip);
  }, [showTooltip]);

  const onClickA = (e) => {
    console.log(e.target);
  };

  return (
    <div className='input-direction' style={{ position: 'relative' }}>
      <Input props={props1} />
      { showTooltip && <Tooltip 
        cities={cities}
        onClickA={onClickA}
        // parentInp1={parentInp1}
      /> }
    </div>
  );
};
  
export default InputsDirection1;




{/* <div className='input-direction' style={{ position: 'relative' }}>
          {cities.map((city, idC) => (
            <div key={idC}>
              <a href='#' id={city.id} onClick={onClickA}>{city.name}</a>
              <div style={{ display: 'none' }}>{city._id}</div>
            </div>
          ))}
        </div> */}



  // // Tooltip

  // //Создали состояние: фокус есть или нет
  // const [onFocus, setOnFocus] = useState(false);
  // // Показывать подказку или нет
  // const [onBlur, setOnBlur] = useState(false);

  // const handleFocus = () => {
  //   setOnFocus(true);
  // };

  // // ??? (false)
  // const handleBlur = () => {
  //   setOnBlur(false);
  // };

  // // Дополнительно: скрыть подсказку по нажатию Esc
  // const closeTooltip = (event) => {
  //   if (event.key === 'Escape') {
  //     setOnBlur(false);
  //   }
  // };

  // useEffect(() => {
  //   // Подписка на события
  //   document.addEventListener('keydown', closeTooltip);
  //   return () => {
  //     // Отписываемся от событий при размонтировании
  //     document.removeEventListener('keydown', closeTooltip);
  //   };
  // }, []);

  
  //   // Подписка на события Фокус