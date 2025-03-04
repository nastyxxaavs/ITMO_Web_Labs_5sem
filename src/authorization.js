// // // Сценарий для отображения состояния авторизации
// // window.onload = function() {
// //   const urlParams = new URLSearchParams(window.location.search);
// //   const sessionStatus = urlParams.get('session');
// //   const reviewForm = document.getElementById('review-form');
// //   const loginPrompt = document.getElementById('login-prompt');
// //   const authLinks = document.getElementById('auth-links');
// //
// //   if (sessionStatus === 'authorized') {
// //     reviewForm.style.display = 'block';
// //     loginPrompt.style.display = 'none';
// //     authLinks.style.display = 'none';
// //   } else {
// //     reviewForm.style.display = 'none';
// //     loginPrompt.style.display = 'block';
// //     authLinks.style.display = 'block';
// //   }
// // };
//
// document.addEventListener("DOMContentLoaded", function () {
//   // Пытаемся получить информацию о текущей сессии пользователя из локального хранилища
//   const userData = JSON.parse(localStorage.getItem('user'));
//
//   // Определяем состояние авторизации
//   const isLoggedIn = userData && userData.isLoggedIn;
//   const userName = isLoggedIn ? userData.name : "";
//
//   // Получаем шаблон Handlebars
//   const source = document.getElementById('auth-template').innerHTML;
//   const template = Handlebars.compile(source);
//
//   // Отображаем шаблон с соответствующими данными
//   const context = { isLoggedIn, userName };
//   document.getElementById('auth-status').innerHTML = template(context);
//
//   // Добавляем обработчики событий для кнопок
//   if (isLoggedIn) {
//     document.getElementById('logout-btn').addEventListener('click', logout);
//   } else {
//     document.getElementById('login-btn').addEventListener('click', login);
//   }
// });
//
// // Функция для входа (пример)
// function login() {
//   const userName = prompt("Введите ваше имя");
//   localStorage.setItem('user', JSON.stringify({ name: userName, isLoggedIn: true }));
//   location.reload();
//
//   // Для простоты, переключаем параметр URL
//   window.location.search = '?loggedIn=true';
// }
//
// // Функция для выхода
// function logout() {
//   localStorage.removeItem('user');
//   location.reload();
//
//   // Для выхода, меняем параметр URL
//   window.location.search = '?loggedIn=false';
// }
//
//
// document.addEventListener("DOMContentLoaded", function () {
//   // Получаем параметры URL
//   const urlParams = new URLSearchParams(window.location.search);
//   const loggedIn = urlParams.get('loggedIn') === 'true'; // Проверяем параметр loggedIn
//
//   // Определяем, авторизован ли пользователь
//   const userName = loggedIn ? "Иван Иванов" : null; // Пример имени пользователя
//
//   // Обновляем блок с информацией о текущей сессии
//   const authInfoContainer = document.querySelector('.auth-status');
//
//   if (loggedIn) {
//     // Отображаем информацию для авторизованного пользователя
//     authInfoContainer.innerHTML = `
//             <p>Вы авторизованы как: ${userName}</p>
//             <button id="logout-btn">Выйти</button>
//         `;
//     document.getElementById('logout-btn').addEventListener('click', logout);
//   } else {
//     // Отображаем информацию для неавторизованного пользователя
//     authInfoContainer.innerHTML = `
//             <p>Вы не авторизованы.</p>
//             <button id="login-btn">Войти</button>
//         `;
//     document.getElementById('login-btn').addEventListener('click', login);
//   }
// });
//
