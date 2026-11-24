import { useEffect, useState } from 'react';

import InputsDirection1 from './inputsDirections/InputsDirection1';
import InputsDirection2 from './inputsDirections/InputsDirection2';

import InputDateWhere from './inputData/InputDateWhere';
import InputDateWhereFrom from './inputData/InputDateWhereFrom';

import './trainSearchForm.css';

import { useDispatch, useSelector } from 'react-redux';
import fetchCity from '../../../api/fetchCity';

const TrainSearchForm = () => {

  const dispatch = useDispatch();

  const { cities } = useSelector((state) => state.cities);

  useEffect(() => {    // console.log(cities);
  }, [cities]);


  const [inputWhereFrom__value, setInputWhereFrom__value] = useState('');
  const [inputWhere__value, setInputWhere__value] = useState('');

  // - Работат
  useEffect(() => {
    if (inputWhereFrom__value === '' || inputWhereFrom__value.length === 0) {
      return;
    }; 
    dispatch(fetchCity(inputWhereFrom__value));
  }, [inputWhereFrom__value]);

  useEffect(() => {
    if (inputWhere__value === '' || inputWhere__value.length === 0) {
      return;
    }    
    dispatch(fetchCity(inputWhere__value));
  }, [inputWhere__value]);
  
  const [inputDateWhereFrom__value, setInputDateWhereFrom__value] = useState('');
  const [inputDateWhere__value, setInputDateWhere__value] = useState('');

  // // - Работат
  // useEffect(() => {
  //   console.log(inputDateWhereFrom__value);
  // }, [inputDateWhereFrom__value]); 
  
  // useEffect(() => {
  //   console.log(inputDateWhere__value);
  // }, [inputDateWhere__value]);

  //
  // const stateCities = useSelector((state) => state.cities);
  // useEffect(() => {
  //   console.log(stateCities);
  // }, [stateCities]);
  //
  
  const handleOnSubmit = (e) => {
    e.preventDefault();

     // Нужно собрать для запроса все ... (в низу).
    const target = e.target;    // console.log(target);

    const inputFrom = target.querySelectorAll('.input__direction')[0].children[0];
    console.log(inputFrom.value); // инпут Город от
    console.log(inputFrom.id); // инпут id Города от 
    // console.log(target.children[0]);
    const inputTo = target.querySelectorAll('.input__direction')[1].children[0];
    console.log(inputTo.value); // инпут Город до
    console.log(inputTo.id); // инпут id Города до 

    // inputs__dates
    const inputDateFrom = target.querySelectorAll('.input__date');
    console.log(inputDateFrom); // инпут Город от 
    // const inputDateTo = target.querySelectorAll('.inputs__dates')[0].children[1];
    // console.log(inputDateTo); // инпут Город до 
  };

  return (
    <>
      <form className='form-search' onSubmit={handleOnSubmit}>
        <div className='fields-of-directions'>
          <h4 className='title-form'>Направление</h4>
          <div className='inputs__directions'>
            <InputsDirection1
              setInputWhereFrom={setInputWhereFrom__value} 
              inputWhereFrom={inputWhereFrom__value}
              cities={cities}
             />
            {/* <div className='changeDirections'></div> */}
            <InputsDirection2 
              setInputWhere={setInputWhere__value} 
              inputWhere={inputWhere__value}
              cities={cities}
             />
          </div>
        </div>
        <div className='dates-of-the-directions'>
          <h4 className='title-form'>Дата</h4>
          <div className='inputs__dates'>
            <InputDateWhereFrom DateWhereFrom={setInputDateWhereFrom__value} />
            <InputDateWhere DateWhere={setInputDateWhere__value} />
          </div>
        </div>
        
        <button type="submit" className='btn_search-form'>
          найти билеты
        </button>
      </form>
    </>
  );
};

export default TrainSearchForm;



// Нужно собрать для запроса все данные:
    // примерный запрос без дат у меня в Postman проходит:
    // https://students.netoservices.ru/fe-diplom/routes?from_city_id=67ceb6548c75f00047c8f78d&to_city_id=67ceb6548c75f00047c8f78e
    // У дат формат нужен другой
    // from_city_id,
    // to_city_id,
    // date_start
    // date_end