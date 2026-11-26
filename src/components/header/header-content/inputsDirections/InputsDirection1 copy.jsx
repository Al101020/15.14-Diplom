import { useEffect, useState } from 'react';// import { useSelector } from 'react-redux';

import Input from './Input/Input';
import Tooltip from './tooltip'; // let parentInp1 = null;

const InputsDirection1 = (props) => {  
  // console.log(props);
  console.log(props.objCity1);

  const [showTooltip, setShowTooltip] = useState(false);

  const setInputWhereFrom__value = props.setInputWhereFrom;
  const cities = props.cities;
  const objCity1 = props.objCity; // ??
  // console.log(objCity1);
  const setObjCity1 = props.setObjCity1;

  const handleChangeWhere = (e) => {
    setInputWhereFrom__value(e.target.value);    // parentInp1 = e.target.parentElement;
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

  

  const onClickA = (e) => {    // console.log(e.target);    // console.log(cities);
    console.log('---------начало---------');
    const li = e.target.parentElement;     
    console.log(li); // console.log(li.children[1].innerHTML);

    const idCity = li.children[1].innerHTML;    // console.log(li);
    const nameCity = e.target.innerHTML; // console.log(nameCity); // console.log(idCity);
      // Ложим в переменную
    const obj = {
      idCity: idCity,
      nameCity: nameCity,
    };
    console.log(obj);

    setObjCity1(obj);
    console.log(objCity1);
    console.log('----------конец--------');

      // нужно сравнить два инпута
    const input0 = e.target.closest('.div-input__direction').children[0];// console.log(input);
    const input1 = e.target.closest('.div-input__direction').children[1];// console.log(input);
      // Вставляем в инпут выбраный город
    // input0.value = nameCity;
    input0.value = obj.nameCity;
      //
    
    if (input0.value === input1.value) {
      console.log('Города откуда и куда должны отличаться');
      return;
    };

    
    // input.id = idCity; // id подставили id city --- НЕ ЗАБЫТЬ
    // input.value = nameCity;
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
