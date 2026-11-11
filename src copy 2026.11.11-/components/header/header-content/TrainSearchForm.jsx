import { useEffect, useState } from 'react';

import InputWhere from './inputDirections/InputWhere';
import InputWhereFrom from './inputDirections/InputWhereFrom';

import InputDateWhere from './inputData/InputDateWhere';
import InputDateWhereFrom from './inputData/InputDateWhereFrom';

import './trainSearchForm.css';


//
import { useDispatch, useSelector } from 'react-redux';
import { clearError, citiesArr } from '../../../reducer/citiesSlice'
//


const TrainSearchForm = () => {
  
  const [inputWhereFrom__value, setInputWhereFrom__value] = useState('');
  const [inputWhere__value, setInputWhere__value] = useState('');

  // Выбираем favorites из стора
  // const { citiesArr } = useSelector((state) => state.citiesArr);
  const { cities } = useSelector((state) => state.cities);

  const dispatch = useDispatch();

  // - Работат, но dispatch
  useEffect(() => {
    if (inputWhereFrom__value === '' || inputWhereFrom__value.length === 0) {
      return;
    }
    console.log(inputWhereFrom__value);
    // console.log(appStore.getState());
    // console.log(citiesArr); // cities
    console.log(cities);
    dispatch(citiesArr);
  }, [inputWhereFrom__value]);

  // useEffect(() => {
  //   console.log(inputWhere__value);
  // }, [inputWhere__value]);
  
  const [inputDateWhereFrom__value, setInputDateWhereFrom__value] = useState('');
  const [inputDateWhere__value, setInputDateWhere__value] = useState('');

  // - Работат
  // useEffect(() => {
  //   console.log(inputDateWhereFrom__value);
  // }, [inputDateWhereFrom__value]); 
  
  // useEffect(() => {
  //   console.log(inputDateWhere__value);
  // }, [inputDateWhere__value]);

  //
  const stateCities = useSelector((state) => state.cities);
  useEffect(() => {
    console.log(stateCities);
  }, [stateCities]);
  //
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <form className='form-search' onSubmit={handleOnSubmit}>
        <div className='fields-of-directions'>
          <label className='title-form'>Направление<br />
            <InputWhereFrom setInputWhereFrom={setInputWhereFrom__value} inputWhereFrom={inputWhereFrom__value} />
            <InputWhere where={setInputWhere__value} />
          </label>

        </div>
        <div className='dates-of-the-directions'>
          <label className='title-form'>Дата<br />
            <InputDateWhereFrom DateWhereFrom={setInputDateWhereFrom__value} />
            <InputDateWhere DateWhere={setInputDateWhere__value} />
          </label>
        </div>
        
        <button type="submit" className='btn_search-form'>
          найти билеты
        </button>
      </form>
    </>
  );
};

export default TrainSearchForm;
