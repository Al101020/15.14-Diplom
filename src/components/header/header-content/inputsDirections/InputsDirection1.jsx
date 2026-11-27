import { useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux'; // , useSelector
import { cityAdd } from '../../../../reducer/city1Slice';

import Input from './Input/Input';
import Tooltip from './tooltip';

let obj1;

const InputsDirection1 = (props) => {    // console.log(props);
  const dispatch = useDispatch();

  const [showTooltip, setShowTooltip] = useState(false);

  const setInputWhereFrom__value = props.setInputWhereFrom;
  const cities = props.cities;

  const handleChangeWhere = (e) => {
    setInputWhereFrom__value(e.target.value);
  };

  const props1 = {
    id: 'InputDirection1',
    placeholder: 'От куда',
    funct: {handleChangeWhere},
    functShowT: {setShowTooltip},
  };

  useEffect(() => {
  }, [cities]);

  useEffect(() => {
  }, [showTooltip]);

  useEffect(() => {
    if (obj1) {
      dispatch(cityAdd(obj1));
    }
  }, [obj1]);

  const onClickA = (e) => {
    const target = e.target;
    const li = e.target.parentElement;

    const nameCity = li.children[0].innerHTML;
    const idCity = li.children[1].innerHTML;
    
    obj1 = {
      nameCity: nameCity,
      idCity: idCity,     
    }; // присваеваем новое значене obj1 и через useEffect Ложим объект в хранилище
      
        // Подставляем выбранное значение в инпут
    const input = target.closest('.div-input__direction').children[0];
    input.value = nameCity;    // console.log(input);
  };

  return (
    <div className='div-input__direction' style={{ position: 'relative' }}>
      <Input props={props1} />
      { showTooltip && <Tooltip 
        cities={cities}
        onClickA={onClickA}
      /> }
    </div>
  );
};
  
export default InputsDirection1;
