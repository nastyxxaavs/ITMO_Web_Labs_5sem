document.addEventListener('DOMContentLoaded', function() {
    const schedule = document.getElementById('taskForm');
    const resultContainer = document.getElementById('resContainer');
    let table;

    // Загрузка сохраненных параметров из LocalStorage
    if (localStorage.getItem('taskParams')) {
        const params = JSON.parse(localStorage.getItem('taskParams'));
        document.getElementById('days').value = params.days;
        document.getElementById('difficult').value = params.lessons;
        document.getElementById('taskInput').value = params.language;
    }

    schedule.addEventListener('submit', function(event) {
        event.preventDefault();

        const days = document.getElementById('days').value;
        const lessons = document.getElementById('difficult').value;
        const language = document.getElementById('taskInput').value;

        // Сохраняем параметры в LocalStorage
        const scheduleParams = {
            days,
            lessons,
            language
        };
        localStorage.setItem('taskParams', JSON.stringify(scheduleParams));

        addRowsToSchedule(days, lessons, language);
    });

    function addRowsToSchedule(days, lessons, language) {
        if (!table) {
            table = document.createElement('table');
            table.classList.add('schedule-table');


            const headerRow = document.createElement('tr');
            const headers = ['Дедлайн', 'Сложность', 'Задача'];
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow);
            resultContainer.appendChild(table);
        }

        for (let i = 0; i < days; i++) {
            const row = document.createElement('tr');
                const dayCell = document.createElement('td');
                dayCell.textContent = table.rows.length;
                row.appendChild(dayCell);

                const lessonCell = document.createElement('td');
                lessonCell.textContent = lessons;
                row.appendChild(lessonCell);


                const languageCell = document.createElement('td');
                languageCell.textContent = language;
                row.appendChild(languageCell);

                table.appendChild(row);
        }
    }
});
