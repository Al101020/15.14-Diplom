const InputDateWhereFrom = (props) => {

  const setInputDateWhereFrom__value = props.DateWhereFrom;
  
  const handleChangeDateWhereForm = (e) => {
    setInputDateWhereFrom__value(e.target.value);
  }
  
  return (
    <>
      <input
        id='InputDateWhereFrom' // 'Откуда'
        type='date'
        className='input_date-form'
        onChange={handleChangeDateWhereForm}
      />
    </>
  );
}
  
export default InputDateWhereFrom;
