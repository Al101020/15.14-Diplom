import { useRef, useState } from 'react';
import { useEffect } from 'react';

function InputsDirection() {  // console.log(onFocus);

  const inputRef = useRef(null);
  const [showTooltip, setTooltipShow] = useState(false);

  // InputDirection
  const InputDirection = document.querySelector('.footer');
  console.log(InputDirection);

  // 1. Создаём элемент input
  const inputElement = document.createElement('input');

  // 2. Устанавливаем атрибуты 
  inputElement.setAttribute('type', 'text'); // Тип: текст
  inputElement.setAttribute('placeholder', 'Введите текст...'); // Подсказка
  inputElement.setAttribute('name', 'Input'); // Имя для формы
  inputElement.setAttribute('maxLength', '25'); //  // maxLength='25'

  

  // return inputElement;
  return (
    <>
      <input type="text" ref={inputRef} placeholder="Введите значение" />
      {showTooltip && <div className="tooltip">Это подсказка! ${message}</div>}
    </>
  );
};

export default InputsDirection;
