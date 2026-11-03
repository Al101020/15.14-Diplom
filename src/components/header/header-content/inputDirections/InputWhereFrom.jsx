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
        className='where-form'
        onChange={handleChangeWhereForm}
        placeholder='Откуда'
      />
    </>
  );
}

export default InputWhereFrom;