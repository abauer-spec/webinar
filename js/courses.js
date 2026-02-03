document.addEventListener('DOMContentLoaded', () => {
    const coursesGrid = document.getElementById('courses-grid');

    // Функция для загрузки данных
    async function loadCourses() {
        try {
            // Путь к вашему JSON файлу
            const response = await fetch('courses.json'); 
            if (!response.ok) throw new Error('Ошибка загрузки данных');
            
            const coursesData = await response.json();
            renderCourses(coursesData);
        } catch (error) {
            console.error('Ошибка:', error);
            coursesGrid.innerHTML = `<p style="text-align: center; color: red;">Не удалось загрузить материалы. Попробуйте позже.</p>`;
        }
    }

    // Функция отрисовки карточек
    function renderCourses(data) {
        // Очищаем контейнер от текста "Загрузка..."
        coursesGrid.innerHTML = '';

        // Превращаем объект в массив и перебираем его
        Object.values(data).forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card'; // Убедитесь, что этот класс есть в вашем CSS

            // Проверяем наличие видео. Если ссылки нет, выводим заглушку или сообщение
            const videoContent = course.videoUrl 
                ? `<iframe src="${course.videoUrl}" allow="autoplay" allowfullscreen></iframe>`
                : `<div class="video-placeholder">Видео скоро появится</div>`;

            card.innerHTML = `
                <div class="video-container">
                    ${videoContent}
                </div>
                <div class="course-info">
                    <h3 class="course-title">${course.title}</h3>
                    <p class="course-description">${course.description}</p>
                </div>
            `;
            
            coursesGrid.appendChild(card);
        });
    }

    loadCourses();
});
