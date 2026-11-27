import { useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux'; // , useSelector
import { cityAdd } from '../../../../reducer/city2Slice';

import Input from './Input/Input';
import Tooltip from './tooltip';

let obj2;

const InputsDirection2 = (props) => {
  const dispatch = useDispatch();
  
  const [showTooltip, setShowTooltip] = useState(false);

  const setInputWhere__value = props.setInputWhere;
  const cities = props.cities;

  const handleChangeWhere = (e) => {
    setInputWhere__value(e.target.value);
  };

  const props2 = {
    id: 'InputDirection2',
    placeholder: 'Куда',
    funct: {handleChangeWhere},
    functShowT: {setShowTooltip},
  };

  useEffect(() => {
  }, [cities]);

  useEffect(() => {
  }, [showTooltip]);

  useEffect(() => {
    if (obj2) {
      dispatch(cityAdd(obj2));
    }
  }, [obj2]);

  const onClickA = (e) => {
    const target = e.target;
    const li = e.target.parentElement;

    const nameCity = li.children[0].innerHTML;
    const idCity = li.children[1].innerHTML;
    
    obj2 = {
      nameCity: nameCity,
      idCity: idCity,     
    }; // присваеваем новое значене obj1 и через useEffect Ложим объект в хранилище
      
        // Подставляем выбранное значение в инпут
    const input = target.closest('.div-input__direction').children[0];
    input.value = nameCity;    // console.log(input);
  };

  return (
    <div className='div-input__direction' style={{ position: 'relative' }}>
      <Input props={props2} />
      { showTooltip && <Tooltip 
        cities={cities}
        onClickA={onClickA}
      /> }
    </div>
  );
};
  
export default InputsDirection2;


// return (
  //   <div className='input__directionы' style={{ position: 'relative' }}>
  //     <Input props={props2} />
  //   </div>
  // );
