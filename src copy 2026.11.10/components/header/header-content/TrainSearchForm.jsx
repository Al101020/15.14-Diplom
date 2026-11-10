import { useEffect, useState } from 'react';

import InputWhere from './inputDirections/InputWhere';
import InputWhereFrom from './inputDirections/InputWhereFrom';

import InputDateWhere from './inputData/InputDateWhere';
import InputDateWhereFrom from './inputData/InputDateWhereFrom';

import './trainSearchForm.css';


//
import { useDispatch, useSelector } from 'react-redux';
import { clearError, cities } from '../../../reducer/citiesSlice'

import appStore from '../../../app/store';

import fetchCity from '../../../api/fetchCity';
//


const TrainSearchForm = () => {
  
  const [inputWhereFrom__value, setInputWhereFrom__value] = useState('');
  const [inputWhere__value, setInputWhere__value] = useState('');

  const dispatch = useDispatch();

  // - Работат
  useEffect(() => {
    if (inputWhereFrom__value === '' || inputWhereFrom__value.length === 0) {
      return;
    }
    console.log(inputWhereFrom__value);
    
    //
    // dispatch(fetchCity(inputWhereFrom__value));
    console.log(appStore.getState());
    //

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
                                           {/* setInputDateWhereFrom__value */}
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


