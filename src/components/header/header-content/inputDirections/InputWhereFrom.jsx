// import fetchCity from "../../../../api/fetchCity";
import { useDispatch, useSelector } from 'react-redux';
import { citiesArr } from '../../../../reducer/citiesSlice';

const InputWhereFrom = (props) => {
  const setInputWhereFrom__value = props.whereFrom;
  //
  const dispatch = useDispatch();
  //

  async function fetchCity(part) {
    try {
      const response = await fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${part}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const city = await response.json();
      if(city === '' || city.length === 0) {
        return;
      }
      console.log(city);

      //  - тут нужно положить в хранилище cities
      dispatch(citiesArr(city));
      // Store.getStore();
      //
    } catch (error) {
      console.error('Ошибка: ', error);
    }
  };

  const handleChangeWhereForm = (e) => {    // setInputWhereFrom__value(e.target.value);
    // setInputWhereFrom__value(fetchCity(e.target.value));    // console.log(props);
    // const city = fetchCity(e.target.value);
    // console.log(city);
    dispatch(fetchCity(e.target.value));
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
