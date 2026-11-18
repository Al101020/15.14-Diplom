const InputWhere = (props) => {
  const setInputWhere__value = props.where;

  const handleChangeWhere = (e) => {
    setInputWhere__value(e.target.value);
  };

  return (
    <>
      <input
        id='inputWhere'
        type='text'
        className='input_directions-form'
        onChange={handleChangeWhere}
        placeholder='Куда'
        maxLength='25'
      />
    </>
  );
}

export default InputWhere;