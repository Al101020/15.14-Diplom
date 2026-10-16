// import './HowItWorks';

const HowItWorks = () => {
  const btnClick = (e) => {
    console.log(e.target);
  }
  return (
    <div className='how-it-works'>
      <p>Как это работает</p>
      <button onClick={btnClick} id='btnLearnMore'>Узнать больше</button>
    </div>);
};

export default HowItWorks;