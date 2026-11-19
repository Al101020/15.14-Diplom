// import { useEffect, useState } from 'react'; 
import Input from './Input/Input';// import InputsDirection from './InputsDirection';

const InputsDirection1 = (props) => {  // console.log(props);  

  const setInputWhereFrom__value = props.setInputWhereFrom;
  const cities = props.cities;  // console.log(cities);

  const handleChangeWhere = (e) => {
    setInputWhereFrom__value(e.target.value);
  };

  const props1 = {
    id: 'InputDirection1',
    placeholder: 'От куда',
    funct: {handleChangeWhere}
  };

  return (
    <div className='input-direction' style={{ position: 'relative' }}>
      <Input props={props1} />
    </div>
  );
}
  
export default InputsDirection1;





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