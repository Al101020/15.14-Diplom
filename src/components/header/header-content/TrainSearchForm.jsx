import './trainSearchForm.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InputsDirection1 from './inputsDirections/InputsDirection1';
import InputsDirection2 from './inputsDirections/InputsDirection2';

import InputDateWhere from './inputData/InputDateWhere';
import InputDateWhereFrom from './inputData/InputDateWhereFrom';

import FetchCity from '../../../api/FetchCity';
// import fetchDirection from '../../../api/fetchDirection';

const TrainSearchForm = () => {
  const { cities } = useSelector((state) => state.cities);  // console.log(cities);
  const { objCity1 } = useSelector((state) => state.objCity1);  // console.log(city1); // undefined
  const { objCity2 } = useSelector((state) => state.objCity2);  // console.log(city2); // undefined
  const { direction } = useSelector((state) => state.direction);
  
  const dispatch = useDispatch();

  // Инпуты
  const [inputWhereFrom__value, setInputWhereFrom__value] = useState('');
  const [inputWhere__value, setInputWhere__value] = useState('');
  
  // Объект выбраного города
  useEffect(() => {
    if (objCity1 === null) {
      return;
    }
    console.log(objCity1);
  }, [objCity1]);

  useEffect(() => {
    if (objCity2 === null) {
      return;
    }
    console.log(objCity2);
  }, [objCity2]);

  // - direction
  useEffect(() => {
    // console.log(direction);
    if (direction.items) {
      console.log(direction.items);
    }
  }, [direction]);

  // inputWhere__value - Работат
  useEffect(() => {
    if (inputWhereFrom__value === '' || inputWhereFrom__value.length === 0) {
      return;
    }; 
    dispatch(FetchCity(inputWhereFrom__value));
  }, [inputWhereFrom__value]);

  useEffect(() => {
    if (inputWhere__value === '' || inputWhere__value.length === 0) {
      return;
    }    
    dispatch(FetchCity(inputWhere__value));
  }, [inputWhere__value]);

  
  
  // const [inputDateWhereFrom__value, setInputDateWhereFrom__value] = useState('');
  // const [inputDateWhere__value, setInputDateWhere__value] = useState('');

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
    // Нужно достать из хранилища id-городов

    // const target = e.target;    // console.log(target);
    //     // Направления
    // const inputFrom = target.querySelectorAll('.div-input__direction')[0].children[0];
    // const inputTo = target.querySelectorAll('.div-input__direction')[1].children[0];
    //     // Даты
    // const inputDateFrom = target.querySelectorAll('.input_date-form')[0];
    // const inputDateTo = target.querySelectorAll('.input_date-form')[1];

    // const objDirection = {
    //   nameCityFrom: inputFrom.value,
    //   idCityFrom: inputFrom.id,
    //   nameCityTo: inputTo.value,
    //   idCityTo: inputTo.id,
    //   DateFrom: inputDateFrom.value,
    //   DateTo: inputDateTo.value,
    // }
    
    // console.log(objDirection);    // console.log(objDirection.DateTo);

    //     // Теперь нужно сделать запрос fetch
    // dispatch(fetchDirection(objDirection));
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
            {/* <InputDateWhereFrom DateWhereFrom={setInputDateWhereFrom__value} /> */}
            {/* <InputDateWhere DateWhere={setInputDateWhere__value} /> */}
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
