import { useEffect, useState } from 'react';

import InputWhere from './inputDirections/InputWhere';
import InputWhereFrom from './inputDirections/InputWhereFrom';

import InputDateWhere from './inputData/InputDateWhere';
import InputDateWhereFrom from './inputData/InputDateWhereFrom';

import './trainSearchForm.css';

const TrainSearchForm = () => {
  
  const [inputWhereFrom__value, setInputWhereFrom__value] = useState('');
  const [inputWhere__value, setInputWhere__value] = useState('');

  // useEffect(() => {
  //   console.log(inputWhere__value);
  // }, [inputWhere__value]);
  
  // useEffect(() => {
  //   console.log(inputWhereFrom__value);
  // }, [inputWhereFrom__value]);

  const [inputDateWhereFrom__value, setInputDateWhereFrom__value] = useState('');
  const [inputDateWhere__value, setInputDateWhere__value] = useState('');

  useEffect(() => {
    console.log(inputWhere__value);
  }, [inputDateWhere__value]);
  
  useEffect(() => {
    console.log(inputWhereFrom__value);
  }, [inputDateWhereFrom__value]);


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
            <InputDateWhereFrom DataWhereFrom={setInputDateWhereFrom__value} />
            <InputDateWhere DataWhere={setInputDateWhere__value} />
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


