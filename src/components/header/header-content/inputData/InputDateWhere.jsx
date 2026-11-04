const InputDateWhere = (props) => {
    const setInputDateWhere__value = props.DataWhere;
    console.log(setInputDateWhere__value); //
  
    const handleChangeDateWhere = (e) => {
      setInputDateWhere__value(e.target.value);
    };
  
    return (
      <>
        <input
          id='InputDateWhere' // 'Куда'
          type='date'
          className='input_date-form'
        />
      </>
    );
  }
  
  export default InputDateWhere;
