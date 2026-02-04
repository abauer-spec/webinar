document.addEventListener('DOMContentLoaded', () => {
    const coursesGrid = document.getElementById('courses-grid');

    // 1. Загружаем данные из JSON
    async function loadCourses() {
        try {
            const response = await fetch('courses.json'); 
            if (!response.ok) throw new Error('Ошибка при получении JSON');
            
            const coursesData = await response.json();
            renderCourses(coursesData);
        } catch (error) {
            console.error('Ошибка:', error);
            coursesGrid.innerHTML = `
                <p style="text-align: center; color: #ff4c4c; padding: 40px;">
                    Ошибка загрузки данных. Пожалуйста, проверьте соединение.
                </p>`;
        }
    }

    // 2. Логика отрисовки
    function renderCourses(data) {
        // Очищаем контейнер от заглушки "Загрузка..."
        coursesGrid.innerHTML = '';

        // Превращаем объект в массив (чтобы использовать forEach)
        const coursesArray = Object.values(data);

        // Проверяем, есть ли вообще хоть одно видео в списке
        const hasAnyVideo = coursesArray.some(course => course.videoUrl && course.videoUrl.trim() !== "");

        if (!hasAnyVideo) {
            coursesGrid.innerHTML = `
                <p style="text-align: center; padding: 50px; color: #888;">
                    На данный момент доступных видеоуроков нет.
                </p>`;
            return;
        }

        // Перебираем курсы
        coursesArray.forEach(course => {
            // ЖЕСТКАЯ ПРОВЕРКА: Если videoUrl пустой, null или только пробелы — СКИПАЕМ
            if (!course.videoUrl || course.videoUrl.trim() === "") {
                return; // Этот return просто переходит к следующему элементу массива
            }

            // Если видео есть, создаем карточку
            const card = document.createElement('div');
            card.className = 'course-card';

            card.innerHTML = `
                <div class="video-container">
                    <iframe 
                        src="${course.videoUrl}" 
                        loading="lazy"
                        frameborder="0" 
                        allow="autoplay; fullscreen" 
                        allowfullscreen>
                    </iframe>
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
