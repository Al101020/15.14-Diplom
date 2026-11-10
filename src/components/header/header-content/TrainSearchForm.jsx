import { useEffect, useState } from 'react';

import InputWhere from './inputDirections/InputWhere';
import InputWhereFrom from './inputDirections/InputWhereFrom';

import InputDateWhere from './inputData/InputDateWhere';
import InputDateWhereFrom from './inputData/InputDateWhereFrom';

import './trainSearchForm.css';


//
import { useDispatch, useSelector } from 'react-redux';
import { clearError, citiesArr } from '../../../reducer/citiesSlice'

import appStore from '../../../app/store'; // не то пальто
import fetchCity from '../../../api/fetchCity';


//


const TrainSearchForm = () => {
  
  const [inputWhereFrom__value, setInputWhereFrom__value] = useState('');
  const [inputWhere__value, setInputWhere__value] = useState('');

  // Выбираем favorites из стора
  // const { favorites: favorites } = useSelector((state) => state.moviesObj);
      // Выбираем нужные части состояния из стора - moviesArr
  // const { movies: movies, favorites: favorites, isLoading, isError,
  //   error } = useSelector((state) => state.moviesObj);
  // const { cities: cities } = useSelector((state) => state.cities);
  // const { cities: cities } = useSelector((state) => state.cities);
  const { citiesArr: citiesArr } = useSelector((state) => state.citiesArr);

  const dispatch = useDispatch();

  // - Работат
  useEffect(() => {
    if (inputWhereFrom__value === '' || inputWhereFrom__value.length === 0) {
      return;
    }
    console.log(inputWhereFrom__value);
    // console.log(appStore.getState());
    console.log(citiesArr); // cities
    // console.log(state);
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
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <form className='form-search' onSubmit={handleOnSubmit}>
        <div className='fields-of-directions'>
          <label className='title-form'>Направление<br />
            <InputWhereFrom whereFrom={setInputWhereFrom__value} />
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
