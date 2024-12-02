//  Код создает и управляет простым модальным окном с формой, используя библиотеку jBox
//  для удобного отображения и управления состоянием формы



// Создаем новый экземпляр модального окна с помощью jBox
let myModal = new jBox('Modal', {
    width: 600,
    height: 260,
    title: 'Заявка на рассмотрение:',
    content: `
    <i>Желаете получить качественное и быстрое решение Вашего вопроса - тогда скорей оставляйте заявку!</i><br>
    <form id="subscriptionForm">
    <label>Ваше имя:</label>
    <input id="nameInput" type="text" required />
    <label>Ваш email:</label>
    <input id="emailInput" type="email" required />
    <button type="submit">Отправить</button>
    </form>`,
    closeButton: 'title',
    // Функция, которая будет выполнена после завершения открытия модального окна
    completeOpening: function () {
        // Устанавливаем фокус на поле ввода email
        document.getElementById('emailInput').focus();
        // Устанавливаем фокус на поле ввода имени (это действие будет выполнено сразу после фокуса на email)
        document.getElementById('nameInput').focus();
    },
});

let interval = 4000;
// Проверяем, была ли отправлена форма с email, используя sessionStorage
let emailSubmitted = sessionStorage.getItem('emailSubmitted') ?? false;
// Аналогично для имени
let nameSubmitted = sessionStorage.getItem('nameSubmitted') ?? false;


// Функция для показа модального окна
function openForm() {
    // Если форма еще не была отправлена, открываем модальное окно
    if (!emailSubmitted && !nameSubmitted) {
        myModal.open();

        interval *= 2.5;

        // Рекурсивно вызываем функцию showModal через указанный интервал
        setTimeout(openForm, interval);
    }
}

setTimeout(openForm, interval);

document.addEventListener('submit', (event) => {
    if (event.target.id === 'subscriptionForm') {
        event.preventDefault(); // Отменяем стандартное поведение формы (перезагрузка страницы)
        // Устанавливаем флаги, что форма была отправлена
        emailSubmitted = true;
        nameSubmitted = true;
        sessionStorage.setItem('emailSubmitted', JSON.stringify(emailSubmitted))
        sessionStorage.setItem('nameSubmitted', JSON.stringify(nameSubmitted))

        // Меняем содержимое модального окна после отправки формы
        myModal.setContent(`
            <i>Ваша заявка принята! Ожидайте письма от нашего менеджера<i>
        `);


        // Закрываем модальное окно через 2 секунды после отправки формы
        setTimeout(() => {
            myModal.close();
        }, 2000);
    }
});