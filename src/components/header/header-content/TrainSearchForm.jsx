import './trainSearchForm.css';

const TrainSearchForm = () => {

  const handleOnSubmit = (e) => {
    event.preventDefault();
    const formSearch = e.target;
    console.log(formSearch);
  }

  return (
    <>
      <form className='form-search' onSubmit={handleOnSubmit}>
        <div className='fields-of-directions'>
          <div className='title-form'>Направление</div>
          <input
            type='text'
            className='where-from'
            placeholder='Откуда'
          />
          <input
            type='text'
            className='where-from'
            placeholder='Куда'
          />
        </div>
        <div className='dates-of-the-directions'>
          <div className='title-form'>Дата</div>
          <input
            type='date'
            className='where-from'
            placeholder='Откуда'
          />
          <input
            type='date'
            className='where-from'
            placeholder='Куда'
          />
        </div>
        
        <button type="submit" className='btn_search-form'>
          найти билеты
        </button>
      </form>
    </>
  );
};

export default TrainSearchForm;


