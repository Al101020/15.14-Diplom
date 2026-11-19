// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
import { useEffect, useState } from 'react';
import MyInput from './MyInput/MyInput';

const InputsDirection1 = (props) => {  
  // console.log(props);

  // const inputWhereFrom__value = props.inputWhereFrom;
  const setInputWhereFrom__value = props.setInputWhereFrom;
  const cities = props.cities;

  // if (cities)
  // console.log(cities);

  const handleChangeWhere = (e) => {
    setInputWhereFrom__value(e.target.value);
  };

  // Tooltip
  // 2 вариант onFocus, onBlur - // импортируем MyInput

  // фокус есть или нет
  const [onFocus, setOnFocus] = useState(false);
  // Показывать подказку или нет
  const [onBlur, setOnBlur] = useState(false);

  const handleFocus = () => {
    setOnFocus(true);
  };

  const handleBlur = () => {
    setOnBlur(false);
  };

  // Дополнительно: скрыть подсказку по нажатию Esc
  const closeTooltip = (event) => {
    if (event.key === 'Escape') {
      setOnBlur(false);
    }
  };

  useEffect(() => {
    // Подписка на события
    document.addEventListener('keydown', closeTooltip);
    return () => {
      // Отписываемся от событий при размонтировании
      document.removeEventListener('keydown', closeTooltip);
    };
  }, []);

  // useEffect(() => {
  //   // Подписка на события Фокус
  //   document.addEventListener('keydown', функция фокус);
  //   return () => {
  //     // Отписываемся от событий при размонтировании
  //     document.removeEventListener('keydown', closeTooltip);
  //   };
  // }, []);




  


  // 1 вариант
  // const [showTooltip, setShowTooltip] = useState(false);

  // const handleFocus = () => {
  //   setShowTooltip(true);
  // };

  // const handleBlur = () => {
  //   setShowTooltip(false);
  // };

  // // Дополнительно: скрыть подсказку по нажатию Esc
  // const closeTooltip = (event) => {
  //   if (event.key === 'Escape') {
  //     setShowTooltip(false);
  //   }
  // };

  // useEffect(() => {
  //   // Подписка на события
  //   document.addEventListener('keydown', closeTooltip);
  //   return () => {
  //     // Отписываемся от событий при размонтировании
  //     document.removeEventListener('keydown', closeTooltip);
  //   };
  // },);
  
  return (
    <div className='InputDirection' style={{ position: 'relative' }}>
      {/* <input
        name='InputDirection'
        id='inputWhereFrom'
        type='text'
        className='input_direction'
        placeholder='От куда'
        onChange={handleChangeWhere}
        maxLength='25'
      /> */}

      <MyInput />
      
    </div>
  );
}
  
export default InputsDirection1;

// import TooltipDirection from "./TooltipDirection";
{/* <TooltipDirection cities={cities}/>
      {showTooltip && <div id="tooltip-id" role="tooltip">12345</div>} */}


//   import fetchCity from "../../../../api/fetchCity";
// import { useDispatch, useSelector } from 'react-redux';
// import { citiesArr } from '../../../../reducer/citiesSlice';

// const InputWhereFrom = (props) => {  // console.log(props);
//   const inputWhereFrom__value = props.inputWhereFrom;
//   const setInputWhereFrom__value = props.setInputWhereFrom;
//   const dispatch = useDispatch();

//   const handleChangeWhereForm = (e) => {
//     setInputWhereFrom__value(e.target.value);
//   }

//   return (
//     <>
//       <input
//         id='inputWhereFrom'
//         type='text'
//         className='input_directions-form'
//         onChange={handleChangeWhereForm}
//         placeholder='Откуда'
//         maxLength='25'
//       />
//     </>
//   );
// }

// export default InputWhereFrom;