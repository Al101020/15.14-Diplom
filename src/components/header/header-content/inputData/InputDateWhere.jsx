const InputDateWhere = (props) => {

  const setInputDateWhere__value = props.DateWhere;
  
  const handleChangeDateWhere = (e) => {
    setInputDateWhere__value(e.target.value);
  };
  
  return (
    <>
      <input
        id='InputDateWhere' // 'Куда'
        type='date'
        className='input_date-form'
        onChange={handleChangeDateWhere}
      />
    </>
  );
}
  
export default InputDateWhere;
