import { useEffect, useState } from 'react';

import Input from './Input/Input';
import Tooltip from './tooltip';

const InputsDirection2 = (props) => {
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

  const onClickA = (e) => {

    const li = e.target.parentElement;
    const idCity = li.children[1].innerHTML;
    const nameCity = e.target.innerHTML;

    const input = e.target.closest('.div-input__direction').children[0];

    input.id = idCity // id подставили id city --- НЕ ЗАБЫТЬ
    input.value = nameCity;
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
