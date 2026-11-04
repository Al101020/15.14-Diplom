const InputWhereFrom = (props) => {
  const setInputWhereFrom__value = props.whereFrom;

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
