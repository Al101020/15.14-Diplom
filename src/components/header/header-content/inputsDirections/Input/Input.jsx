function Input(props) {   
  // console.log(props);
  const funct = props.props.funct.handleChangeWhere;
  const functShowT = props.props.functShowT;//.setShowTooltip  // console.log(functShowT);
  // Обработчик: показать подсказку при получении фокуса
  const handleFocus = () => {
    functShowT.setShowTooltip(true);    // console.log(showTooltip);
  };
    // Обработчик: скрыть подсказку при потере фокуса
  const handleBlur = () => {
    setTimeout(() => {
      functShowT.setShowTooltip(false);
    }, 100);
    // functShowT.setShowTooltip(false);    // console.log(showTooltip);
  };
  return (
    <>
      <input
          name='InputDirection'
          id={props.props.id}
          type='text'
          // className='input__direction' 
          placeholder={props.props.placeholder}
          onChange={funct}
          maxLength='25'
          required
          autoComplete='off'

          onFocus={handleFocus}
          onBlur={handleBlur}
        />
    </>
  );
};

export default Input;
