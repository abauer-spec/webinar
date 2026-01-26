// 1. Функция регистрации

window.registerWebinar = function(id) {
    alert(`Спасибо за интерес! Ссылка на вебинар скоро будет добавлена.`);
};

// 2. Данные вебинаров (твои актуальные данные)
const webinarResults = {
    1: {
        "title": "Старт сезона отчётов: Главный банк США",
        "date": "13 января 2026",
        "tickers": ["NYSE:JPM"],
        "videoUrl": "https://drive.google.com/file/d/1Cq8EhVu0ZtCbuIbwI4aNxTQ1NGUVqAX_/preview",
        "screenshot": "img/13-01-jpm.jpg", 
        "stats": { "result": "+6.5%", "trades": 1, "duration": "32 мин.", "participants": 328 },
        "description": "Разбор первого крупного отчета в сезоне. Анализ финансовых показателей JPMorgan Chase и вход в сделку на волатильности."
    },
    2: {
        "title": "Банковский сектор (Открытие сезона отчетов)",
        "date": "14 января 2026",
        "tickers": ["NYSE:BAC", "NYSE:WFC", "NYSE:C"],
        "videoUrl": "https://drive.google.com/file/d/1c1v_biubdWWrlWeb28q9H6UExjmVxnr-/preview",
        "screenshot": "img/14-01-bac-wfc-c.jpg",
        "stats": { "result": "+7.7%", "trades": 3, "duration": "34 мин.", "participants": 2203 },
        "description": "В ходе вебинара детально изучили финансовые показатели BAC, WFC и Citigroup в условиях текущих процентных ставок. На практике разобрали 3 успешных сделки с общей доходностью 7.7% за сессию."
    },
    3: { "title": "Инвестиционные гиганты", "date": "15 января 2026", "tickers": ["NYSE:GS", "NYSE:MS"], "stats": { "result": "+9.8%", "trades": 4, "duration": "60 мин.", "participants": 312 }, "description": "Разбор Goldman Sachs и Morgan Stanley.", "videoUrl": "", "screenshot": "" },
    4: {
    "title": "Технологии и медицина: Потребительский спрос",
    "date": "21 января 2026",
    "tickers": ["NASDAQ:NFLX", "NASDAQ:IBKR", "NYSE:JNJ"],
    "videoUrl": "", 
    "screenshot": "img/21-01-netflix.jpg", 
    "stats": { "result": "+6.25%","trades": 1, "duration": "38 мин.", "participants": 4002 },
    "description": "Проанализировали отчет Netflix: взрывной рост подписчиков подтвердил доминирование стриминга. По Johnson & Johnson разобрали влияние судебных издержек на прибыль. Успешно отработали одну сделку по акциям Netflix на импульсе после публикации данных."
    },
    5: { 
        "title": "Потребительский гигант: Отчет P&G", 
        "date": "22 января 2026", 
        "tickers": ["NYSE:PG"], 
        "stats": { "result": "-8%", "trades": 1, "duration": "30 мин.", "participants": 9204 }, 
        "description": "Разбор квартальных результатов Procter & Gamble. Оценка устойчивости бизнеса к инфляции.", 
        "videoUrl": "https://drive.google.com/file/d/1uzIctI38w9NQYHbcfdNkT7U1e5e6B1MH/preview", 
        "screenshot": "img/23-01-intel-pg.jpg" 
    },
    6: { 
    "title": "Чипы и Потребительский гигант", 
    "date": "23 января 2026", 
    "tickers": ["NASDAQ:INTC", "NYSE:PG"], 
    "stats": { "result": "+8.8%", "trades": 2, "duration": "27 мин.", "participants": 10843 }, 
    "description": "Стратегия хеджирования в действии: объединили волатильный технологический сектор (Intel) с защитным активом (P&G). За счет перекрытия позиций минимизировали риски вчерашней сделки и закрыли сессию с отличным общим профитом.", 
    "videoUrl": "https://drive.google.com/file/d/1_d-Nxw1GEAwPtoA3LfalMlAM8tOgvlHG/preview", 
    "screenshot": "img/23-01-intel-pg.jpg" 
    },
    7: { 
        "title": "Авиаперевозки", 
        "date": "26 января 2026", 
        "tickers": ["NASDAQ:RYAAY"], 
        "stats": { "result": "+5.82%", "trades": 1, "duration": "30 мин.", "participants": 7210 }, 
        "description": "Анализ крупнейшего лоукостера Европы. Использовали волатильность авиасектора после квартального отчета Ryanair. Сделка закрыта с четким соблюдением риск-менеджмента и профитом +5,82%.", 
        "videoUrl": "", 
        "screenshot": "img/26-01-ryaay.jpg" },
    8: { "title": "Промышленность и Авто", "date": "27 января 2026", "tickers": ["NYSE:BA", "NYSE:GM"], "stats": { "result": "+11.0%", "trades": 3, "duration": "50 мин.", "participants": 405 }, "description": "Boeing и GM.", "videoUrl": "", "screenshot": "" },
    9: { "title": "День мега-капитализации", "date": "29 января 2026", "tickers": ["NYSE:V", "NASDAQ:MSFT", "NASDAQ:TSLA", "NASDAQ:AMZN"], "stats": { "result": "+34.2%", "trades": 8, "duration": "120 мин.", "participants": 1250 }, "description": "Microsoft, Tesla, Amazon.", "videoUrl": "", "screenshot": "" },
    10: { "title": "Итоги квартала", "date": "30 января 2026", "tickers": ["NASDAQ:AAPL", "NYSE:AXP"], "stats": { "result": "+15.6%", "trades": 4, "duration": "58 мин.", "participants": 890 }, "description": "Apple и Amex.", "videoUrl": "", "screenshot": "" },
    11: { "title": "Потребительский сектор", "date": "3 февраля 2026", "tickers": ["NASDAQ:PEP", "NASDAQ:SBUX"], "stats": { "result": "0.0%", "trades": 0, "duration": "0 мин.", "participants": 0 }, "description": "PepsiCo и Starbucks.", "videoUrl": "", "screenshot": "" },
    12: { "title": "Битва Технологий", "date": "4 февраля 2026", "tickers": ["NASDAQ:GOOGL", "NASDAQ:META"], "stats": { "result": "0.0%", "trades": 0, "duration": "0 мин.", "participants": 0 }, "description": "Google и Meta.", "videoUrl": "", "screenshot": "" },
    13: { "title": "Дивидендные аристократы", "date": "5 февраля 2026", "tickers": ["NYSE:PM"], "stats": { "result": "0.0%", "trades": 0, "duration": "0 мин.", "participants": 0 }, "description": "Philip Morris.", "videoUrl": "", "screenshot": "" }
};

// 3. Функции управления модалкой
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
    
    if (!data) return;

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
        
        ${videoSectionHTML} <div class="modal-section">
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

// 4. ИСПРАВЛЕННЫЕ СЛУШАТЕЛИ (работают на Firebase/Mobile)
window.addEventListener('click', function(event) {
    const modal = document.getElementById('resultsModal');
    if (event.target.id === 'resultsModal') {
        window.closeModal();
    }
});
document.addEventListener('keydown', (e) => { 
    if (e.key === 'Escape') window.closeModal(); 
});

// 5. Анимация
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.webinar-card');
    cards.forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.1}s`;
        requestAnimationFrame(() => {
            card.classList.add('visible');
        });
    });
});

function updateTimer() {
            const now = new Date();
            // Установка даты: 14 января 2026, 17:00 по Москве (UTC+3)
            // Если нужно поменять дату, меняй строку ниже в формате ГГГГ-ММ-ДДTЧЧ:ММ:СС+03:00
            const targetDate = "2026-01-27T17:00:00+03:00";
            const target = new Date(targetDate);
            const diff = target - now;
            if (diff <= 0) {
                // Если время вышло
                document.getElementById('days').innerText = "00";
                document.getElementById('hours').innerText = "00";
                document.getElementById('minutes').innerText = "00";
                document.getElementById('seconds').innerText = "00";
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

        // Обновление каждую секунду
        setInterval(updateTimer, 1000);
        updateTimer();
