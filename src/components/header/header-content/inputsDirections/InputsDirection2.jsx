const InputsDirection2 = () => {
  const handleChangeWhere = (e) => {
    console.log(e.target.value);
  };
  
  return (
    <div className='InputDirection'>
      <input
        name='InputDirection'
        id='inputWhere'
        type='text'
        className='input_direction'
        placeholder='Куда'
        onChange={handleChangeWhere}
        maxLength='25'
      />
    </div>
  );
}
  
export default InputsDirection2;