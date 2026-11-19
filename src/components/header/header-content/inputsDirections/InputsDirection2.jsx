import { useEffect, useState } from 'react'; 
import Input from './Input/Input';// import InputsDirection from './InputsDirection';

const InputsDirection2 = (props) => {    // console.log(props);  

  const setInputWhere__value = props.setInputWhere;
  const cities = props.cities;  // console.log(cities);

  const handleChangeWhere = (e) => {
    setInputWhere__value(e.target.value);
  };

  const props2 = {
    id: 'InputDirection2',
    placeholder: 'Куда',
    funct: {handleChangeWhere}
  };

  return (
    <div className='input-direction' style={{ position: 'relative' }}>
      <Input props={props2} />
    </div>
  );
}
  
export default InputsDirection2;
