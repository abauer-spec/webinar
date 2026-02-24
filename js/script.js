// 1. Инициализация данных из внешнего файла
let webinarResults = {};

async function loadWebinarData() {
    const modalBody = document.getElementById('modalBody');
    try {
        console.log("Данные загружаются...");
        const response = await fetch('webinars.json');
        
        if (!response.ok) throw new Error('Ошибка сети');
        
        webinarResults = await response.json();
        console.log("Данные успешно загружены");
    } catch (err) {
        console.log("Идет загрузка — пожалуйста, подождите");
        if (modalBody) {
            modalBody.innerHTML = `
                <div style="padding: 40px; text-align: center; color: #a0a0a0;">
                    <p>Идет загрузка данных — пожалуйста, подождите...</p>
                    <p style="font-size: 12px; margin-top: 10px;">Если это сообщение висит долго, обновите страницу.</p>
                </div>`;
        }
    }
}

// Запускаем загрузку сразу
loadWebinarData();

// 2. Функции управления модалкой
window.toggleFullScreen = function(img) {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (img.requestFullscreen) { img.requestFullscreen(); }
        else if (img.webkitRequestFullscreen) { img.webkitRequestFullscreen(); } 
    } else {
        if (document.exitFullscreen) { document.exitFullscreen(); }
        else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }
    }
};

window.closeModal = function() {
    const modal = document.getElementById('resultsModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        const container = modal.querySelector('.video-container');
        if (container) container.innerHTML = container.innerHTML;
    }
};

window.showResults = function(id) {
    const modal = document.getElementById('resultsModal');
    const modalBody = document.getElementById('modalBody');
    const data = webinarResults[id];
    
    // Если данные еще не загрузились, а пользователь нажал на карточку
    if (!data) {
        modal.style.display = 'block';
        modalBody.innerHTML = '<p style="text-align:center; padding:50px;">Загружаем данные, секунду...</p>';
        return;
    }

    let tickerTags = '';
    if (data.tickers) {
        data.tickers.forEach(ticker => {
            tickerTags += `<tv-ticker-tag symbol="${ticker}"></tv-ticker-tag>`;
        });
    }

    let videoSectionHTML = '';
    if (data.videoUrl && data.videoUrl !== "") {
        videoSectionHTML = `
            <div class="modal-section">
                <h3>Видео-запись</h3>
                <div class="video-container" 
                     style="position: relative; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; border: 1px solid #333; background: #000;">
                    <iframe src="${data.videoUrl}" 
                            allow="autoplay; allowfullscreen" 
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
                            allowfullscreen>
                    </iframe>
                </div>
            </div>`;
    }

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${data.title || 'Результаты вебинара'}</h2>
            <p class="modal-date">${data.date || ''}</p>
            <div class="card-tickers" style="margin-top: 16px;">${tickerTags}</div>
        </div>
        
        <div class="modal-section">
            <h3>Статистика вебинара</h3>
            <div class="result-stats">
                <div class="stat-item"><div class="stat-label">Результат</div><div class="stat-value positive">${data.stats.result}</div></div>
                <div class="stat-item"><div class="stat-label">Сделок</div><div class="stat-value">${data.stats.trades}</div></div>
                <div class="stat-item"><div class="stat-label">Длительность</div><div class="stat-value">${data.stats.duration}</div></div>
                <div class="stat-item"><div class="stat-label">Участников</div><div class="stat-value">${data.stats.participants}</div></div>
            </div>
        </div>
        
        ${videoSectionHTML} 
        <div class="modal-section">
            <h3>Результаты торговли</h3>
            <img src="${data.screenshot}" onclick="window.toggleFullScreen(this)" 
                 style="width: 100%; border-radius: 12px; cursor: zoom-in; border: 1px solid #333;" title="Кликните для увеличения">
        </div>
        
        <div class="modal-section">
            <h3>Описание</h3>
            <p style="color: #a0a0a0; line-height: 1.6;">${data.description}</p>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

// 3. Слушатели событий
window.addEventListener('click', function(event) {
    const modal = document.getElementById('resultsModal');
    if (event.target.id === 'resultsModal') {
        window.closeModal();
    }
});

document.addEventListener('keydown', (e) => { 
    if (e.key === 'Escape') window.closeModal(); 
});

// 4. Анимация появления карточек
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.webinar-card');
    cards.forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.1}s`;
        requestAnimationFrame(() => {
            card.classList.add('visible');
        });
    });
});

// 5. Таймер обратного отсчета
function updateTimer() {
    const now = new Date();
    // ЗАДАТЬ ВРЕМЯ И ДАТУ
    const targetDate = "2026-02-24T18:00:00+03:00";
    const target = new Date(targetDate);
    const diff = target - now;

    if (diff <= 0) {
        ['days', 'hours', 'minutes', 'seconds'].forEach(id => {
            document.getElementById(id).innerText = "00";
        });
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById('days').innerText = d.toString().padStart(2, '0');
    document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = s.toString().padStart(2, '0');
}

setInterval(updateTimer, 1000);
updateTimer();
