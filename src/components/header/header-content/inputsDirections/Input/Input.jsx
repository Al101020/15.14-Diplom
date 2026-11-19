function Input(props) {  // console.log(props);
  const funct = props.props.funct.handleChangeWhere;
  return (
    <>
      <input
          name='InputDirection'
          id={props.props.id}
          type='text'
          className='input_direction' 
          placeholder={props.props.placeholder}
          onChange={funct}
          maxLength='25'
          required
        />
    </>
  );
};

export default Input;
