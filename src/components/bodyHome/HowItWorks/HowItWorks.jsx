const HowItWorks = () => {
  const btnClick = (e) => {
    console.log(e.target);
  }
  return (
    <div className='how-it-works'>
      <p>Как это работает</p>
      <button onClick={btnClick}>Узнать больше</button>
    </div>);
};

export default HowItWorks;