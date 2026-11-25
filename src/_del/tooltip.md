# Свой компонент на чистом JS

Этот подход даёт гибкость: вы сами контролируете логику, стили и поведение.
Шаги:
HTML. Для каждого элемента, который должен иметь подсказку, добавьте атрибут data-tooltip с текстом подсказки. Сам контейнер подсказки создаётся динамически через JavaScript.
CSS. Изначально подсказка скрыта (display: none), а при наведении на элемент с ней добавляется класс .active, который делает её видимой.
JavaScript. Для каждого элемента с data-tooltip создаём элемент <span> с ролью tooltip и вставляем в него текст из атрибута data-tooltip. Затем вешаем обработчики событий mouseenter (показать) и mouseleave (скрыть).
 
dev.to
Пример кода:
// Получаем все элементы с data-tooltip
const triggers = document.querySelectorAll('[data-tooltip]');

// Функции для показа и скрытия
const openTooltip = (e) => {
  const tooltip = document.createElement('span');
  tooltip.setAttribute('role', 'tooltip');
  tooltip.setAttribute('inert', true); // Скрываем до подключения к DOM
  tooltip.textContent = e.target.getAttribute('data-tooltip');
  tooltip.classList.add('active');
  e.target.appendChild(tooltip);
};

const closeTooltip = (e) => {
  const tooltip = e.target.querySelector('[role=tooltip]');
  tooltip.classList.remove('active');
};

// Привязываем обработчики к каждому триггеру
triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', openTooltip);
  trigger.addEventListener('mouseleave', closeTooltip);
});
CSS (для примера):
.trigger {
  position: relative;
}

.trigger .tooltip {
  position: absolute;
  top: 100%; /* Подсказка появится над элементом */
  left: 0;
  display: none;
  background: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 1000;
}

.trigger:hover .tooltip {
  display: block;
}
Плюсы: полная контроль над логикой, легко добавить анимацию или сложную логику.
Минусы: нужно писать код, нужно следить за актуальностью структуры DOM.