function setActiveMenuItem() {
  const currentUrl = document.location.href;
  const menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(link => {
    if (link.href === currentUrl) {
      link.parentElement.classList.add('active');
    }
  });
}

window.onload = setActiveMenuItem;


(function() {
  const logoImage = document.getElementById('logoImage');

  logoImage.addEventListener('mouseover', function() {
    logoImage.classList.add('rotate');
  });

  logoImage.addEventListener('mouseout', function() {
    logoImage.classList.remove('rotate');
  });
})();


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
    document.getElementById('emailInput').focus();
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
  if (!emailSubmitted && !nameSubmitted) {
    myModal.open();

    interval *= 5.5;

    setTimeout(openForm, interval);
  }
}

setTimeout(openForm, interval);

document.addEventListener('submit', async (event) => {
  if (event.target.id === 'subscriptionForm') {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;

    const data = { name, email };

    try {
      const response = await fetch('http://localhost:8082/form-add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        myModal.setContent(`
            <i>Ваша заявка принята! Ожидайте письма от нашего менеджера</i>
        `);
      } else {
        myModal.setContent(`
            <i>Ошибка при отправке заявки</i>
        `);
      }
    } catch (error) {
      console.error('Ошибка:', error);
      myModal.setContent(`
            <i>Ошибка при отправке заявки</i>
        `);
    }

    setTimeout(() => {
      myModal.close();
    }, 2000);
  }
});
