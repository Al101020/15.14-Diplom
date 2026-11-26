import { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { cityAdd } from '../../../../reducer/city1Slice';

import Input from './Input/Input';
import Tooltip from './tooltip'; // let parentInp1 = null;

let obj1;

const InputsDirection1 = (props) => {    // console.log(props);  // console.log(props.setObjCity1);
  const dispatch = useDispatch();

  const [showTooltip, setShowTooltip] = useState(false);

  const setInputWhereFrom__value = props.setInputWhereFrom;
  const cities = props.cities;

  // const objCity1 = props.objCity1; // ??
  // console.log(objCity1);
  // const setObjCity1 = props.setObjCity1;

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

  useEffect(() => {
    if (obj1) {
      dispatch(cityAdd(obj1));
    }
  }, [obj1]);

  

  const onClickA = (e) => {
    console.log('---------начало---------');
    console.log(e.target);    // console.log(cities);
    
    const li = e.target.parentElement; // console.log(li); // console.log(li.children[1].innerHTML);

    const nameCity = li.children[0].innerHTML; // console.log(nameCity); // console.log(idCity);
    const idCity = li.children[1].innerHTML; // console.log(idCity);
    
    obj1 = {
      nameCity: nameCity,
      idCity: idCity,      
    }; // присваеваем новое значене obj1 и через useEffect Ложим объект в хранилище
    // console.log(obj);  
    
    //   // Достаем из хранилища
    // const objCity1 = useSelector(state => state.objCity1); недопустимый вызов
    // console.log(objCity1);





    // setObjCity1(obj);
    // console.log(objCity1);
    // console.log('----------конец--------');

    //   // нужно сравнить два инпута
    // const input0 = e.target.closest('.div-input__direction').children[0];// console.log(input);
    // const input1 = e.target.closest('.div-input__direction').children[1];// console.log(input);
    //   // Вставляем в инпут выбраный город
    // // input0.value = nameCity;
    // input0.value = obj.nameCity;
    //   //
    
    // if (input0.value === input1.value) {
    //   console.log('Города откуда и куда должны отличаться');
    //   return;
    // };

    // console.log('Города отличаются');
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





  // const onClickA = (e) => {    // console.log(e.target);    // console.log(cities);
  //   console.log('---------начало---------');
  //   const li = e.target.parentElement;     
  //   console.log(li); // console.log(li.children[1].innerHTML);

  //   const idCity = li.children[1].innerHTML;    // console.log(li);
  //   const nameCity = e.target.innerHTML; // console.log(nameCity); // console.log(idCity);
  //     // Ложим в переменную
  //   const obj = {
  //     idCity: idCity,
  //     nameCity: nameCity,
  //   };
  //   console.log(obj);

  //   setObjCity1(obj);
  //   console.log(objCity1);
  //   console.log('----------конец--------');

  //     // нужно сравнить два инпута
  //   const input0 = e.target.closest('.div-input__direction').children[0];// console.log(input);
  //   const input1 = e.target.closest('.div-input__direction').children[1];// console.log(input);
  //     // Вставляем в инпут выбраный город
  //   // input0.value = nameCity;
  //   input0.value = obj.nameCity;
  //     //
    
  //   if (input0.value === input1.value) {
  //     console.log('Города откуда и куда должны отличаться');
  //     return;
  //   };

    
  //   // input.id = idCity; // id подставили id city --- НЕ ЗАБЫТЬ
  //   // input.value = nameCity;
  // };
