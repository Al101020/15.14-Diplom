import { useEffect, useState } from 'react';// import { useSelector } from 'react-redux';

import Input from './Input/Input';
import Tooltip from './tooltip'; // let parentInp1 = null;

const InputsDirection1 = (props) => {  // console.log(props);
  const [showTooltip, setShowTooltip] = useState(false);
  const setInputWhereFrom__value = props.setInputWhereFrom;
  const cities = props.cities;

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

  const onClickA = (e) => {    // console.log(e.target);

    const li = e.target.parentElement;// console.log(li);// console.log(li.children[1].innerHTML);
    const idCity = li.children[1].innerHTML;    // console.log(li);
    const nameCity = e.target.innerHTML;

    const input = e.target.closest('.input__direction').children[0];// console.log(input);
    
    input.id = idCity; // id подставили id city --- НЕ ЗАБЫТЬ
    input.value = nameCity;
  };

  return (
    <div className='input__direction' style={{ position: 'relative' }}>
      <Input props={props1} />
      { showTooltip && <Tooltip 
        cities={cities}
        onClickA={onClickA}
      /> }
    </div>
  );
};
  
export default InputsDirection1;
