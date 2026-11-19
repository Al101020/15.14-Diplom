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

  useEffect(() => {
    console.log(cities);
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

  // - Работат
  useEffect(() => {
    console.log(inputDateWhereFrom__value);
  }, [inputDateWhereFrom__value]); 
  
  useEffect(() => {
    console.log(inputDateWhere__value);
  }, [inputDateWhere__value]);

  //
  // const stateCities = useSelector((state) => state.cities);
  // useEffect(() => {
  //   console.log(stateCities);
  // }, [stateCities]);
  //
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
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
          {/* <label className='title-form'>Направление<br />
            <InputWhereFrom setInputWhereFrom={setInputWhereFrom__value} inputWhereFrom={inputWhereFrom__value} />
            <ChoiceOfCity props={cities} />
            <InputWhere where={setInputWhere__value} />
          </label> */}

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
