const InputWhere = (props) => {
  // console.log(props.where);
  const setInputWhere__value = props.where;

  const handleChangeWhere = (e) => {
    setInputWhere__value(e.target.value);
  };

  return (
    <>
      <input
        id='inputWhere'
        type='text'
        className='where-form'
        onChange={handleChangeWhere}
        placeholder='Куда'
      />
    </>
  );
}

export default InputWhere;