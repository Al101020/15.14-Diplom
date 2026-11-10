// import fetchCity from "../../../../api/fetchCity";


const InputWhereFrom = (props) => {
  const setInputWhereFrom__value = props.whereFrom;

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
    // setInputWhereFrom__value(city); - тут нужно положить в хранилище cities
  } catch (error) {
    console.error('Ошибка: ', error);
  }
};

  const handleChangeWhereForm = (e) => {    // setInputWhereFrom__value(e.target.value);
    // setInputWhereFrom__value(fetchCity(e.target.value));    // console.log(props);
    const city = fetchCity(e.target.value);
    // console.log(city);
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
