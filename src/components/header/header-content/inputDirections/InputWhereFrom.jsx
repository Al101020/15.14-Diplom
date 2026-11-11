import fetchCity from "../../../../api/fetchCity";
import { useDispatch, useSelector } from 'react-redux';
import { citiesArr } from '../../../../reducer/citiesSlice';

const InputWhereFrom = (props) => {  // console.log(props);
  const inputWhereFrom__value = props.inputWhereFrom;
  const setInputWhereFrom__value = props.setInputWhereFrom;
  const dispatch = useDispatch();

  const handleChangeWhereForm = (e) => {
    setInputWhereFrom__value(e.target.value);
  }

  return (
    <>
      <input
        id='inputWhereFrom'
        type='text'
        className='input_directions-form'
        onChange={handleChangeWhereForm}
        placeholder='Откуда'
        maxLength='25'
      />
    </>
  );
}

export default InputWhereFrom;
