import { useEffect, useState } from 'react';

import InputWhere from './inputDirections/InputWhere';
import InputWhereFrom from './inputDirections/InputWhereFrom';

import './trainSearchForm.css';

const TrainSearchForm = () => {
  
  const [inputWhereFrom__value, setInputWhereFrom__value] = useState('');
  const [inputWhere__value, setInputWhere__value] = useState('');

  useEffect(() => {
    console.log(inputWhere__value);
  }, [inputWhere__value]);
  
  useEffect(() => {
    console.log(inputWhereFrom__value);
  }, [inputWhereFrom__value])

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <form className='form-search' onSubmit={handleOnSubmit}>
        <div className='fields-of-directions'>
          <div className='title-form'>Направление</div>
          <InputWhereFrom whereFrom={setInputWhereFrom__value} />
          <InputWhere where={setInputWhere__value} />

        </div>
        <div className='dates-of-the-directions'>
          <div className='title-form'>Дата</div>
          <input
            type='date'
            className='where-form'
            placeholder='Откуда'
          />
          <input
            type='date'
            className='where-form'
            placeholder='Куда'
          />
        </div>
        
        <button type="submit" className='btn_search-form'>
          найти билеты
        </button>
      </form>
    </>
  );
};

export default TrainSearchForm;


