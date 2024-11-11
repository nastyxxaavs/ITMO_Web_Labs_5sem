document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('scheduleForm');
    const resultContainer = document.getElementById('resultContainer');

    // Загрузка параметров из localStorage
    loadParameters();

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const days = document.getElementById('days').value;
        const lessons = document.getElementById('lessons').value;
        const language = document.getElementById('language').value;

        saveParameters(days, lessons, language);
        generateSchedule(days, lessons, language);
    });

    function generateSchedule(days, lessons, language) {
        let table = '<table ="1"><tr><th>День</th>';

        for (let i = 1; i <= lessons; i++) {
            table += `<th>Занятие ${i}</th>`;
        }

        table += '</tr>';

        for (let d = 1; d <= days; d++) {
            table += `<tr><td>День ${d}</td>`;
                for (let i = 1; i <= lessons; i++) {
                    table += `<td>Занятие ${i} (${language})</td>`;
                }
                table += '</tr>';
        }

        table += '</table>';
        resultContainer.innerHTML = table;
    }

    function saveParameters(days, lessons, language) {
        localStorage.setItem('days', days);
        localStorage.setItem('lessons', lessons);
        localStorage.setItem('language', language);
    }

    function loadParameters() {
        const days = localStorage.getItem('days') || '5';
        const lessons = localStorage.getItem('lessons') || '5';
        const language = localStorage.getItem('language') || 'ru';

        document.getElementById('days').value = days;
        document.getElementById('lessons').value = lessons;
        document.getElementById('language').value = language;
    }
});