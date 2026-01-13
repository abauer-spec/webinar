// Registration function
function registerWebinar(id) {
    alert(`Спасибо за интерес! Ссылка на вебинар скоро будет добавлена.`);
    // Here you can add real registration logic:
    // - Open registration form modal
    // - Redirect to payment page
    // - Send data to backend API
}

// Modal data for past webinars
const webinarResults = {
    1: {
    "title": "Старт сезона отчётов: Главный банк США",
    "date": "13 января 2026",
    "tickers": ["NYSE:JPM"],
    "videoId": "JPM_WEBINAR_01",
    "videoUrl": "",
    "screenshot": "img/13-01-jpm.jpg", 
    "stats": {
        "result": "+6.9%",
        "trades": 1,
        "duration": "42 мин.",
        "participants": 328
            },
    "description": "Разбор первого крупного отчета в сезоне. Анализ финансовых показателей JPMorgan Chase и вход в сделку на волатильности после публикации релиза."
    },
    2: {
      "title": "Банковский сектор (Открытие сезона отчетов)",
      "date": "14 января 2026",
      "tickers": ["NYSE:BAC", "NYSE:WFC", "NYSE:C"],
      "videoId": "BANKS_WEBINAR_02",
      "videoUrl": "https://drive.google.com/file/d/1q6vOX7c61-uFO2BJfyudgDJ8S2XmDt-Q/view?usp=sharing",
      "screenshot": "https://drive.google.com/file/d/1yLjEESteTucz1vlWWu-IjC7K3vQ0dlDF/view?usp=sharing",
      "stats": {
        "result": "+18.5%",
        "trades": 3,
        "duration": "48 мин.",
        "participants": 456
      },
      "description": "Анализируем отчетность крупнейших коммерческих банков США. Обсуждаем влияние процентных ставок на чистую прибыль и ищем точки входа."
    },
    3: {
      "title": "Инвестиционные гиганты: Аналитика и M&A",
      "date": "15 января 2026",
      "tickers": ["NYSE:GS", "NYSE:MS"],
      "videoId": "INVEST_WEBINAR_03",
      "videoUrl": "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
      "screenshot": "https://drive.google.com/file/d/YOUR_SCREENSHOT_ID/view?usp=sharing",
      "stats": {
        "result": "+9.8%",
        "trades": 4,
        "duration": "60 мин.",
        "participants": 312
      },
      "description": "Разбираем доходы Goldman Sachs и Morgan Stanley. Оцениваем активность на рынке слияний и поглощений и доходы от трейдинга."
    },
    4: {
      "title": "Технологии и медицина: Потребительский спрос",
      "date": "21 января 2026",
      "tickers": ["NASDAQ:NFLX", "NASDAQ:IBKR", "NYSE:JNJ"],
      "videoId": "TECH_MED_04",
      "videoUrl": "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
      "screenshot": "https://drive.google.com/file/d/YOUR_SCREENSHOT_ID/view?usp=sharing",
      "stats": {
        "result": "+21.2%",
        "trades": 5,
        "duration": "55 мин.",
        "participants": 520
      },
      "description": "Оцениваем рост числа подписчиков Netflix и финансовую устойчивость Johnson & Johnson. Разбираем отчет IBKR."
    },
    5: {
      "title": "Мировые транзакции и потребительские товары",
      "date": "22 января 2026",
      "tickers": ["NYSE:V", "NYSE:PG", "NASDAQ:XRX"],
      "videoId": "VISA_PG_05",
      "videoUrl": "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
      "screenshot": "https://drive.google.com/file/d/YOUR_SCREENSHOT_ID/view?usp=sharing",
      "stats": {
        "result": "+14.1%",
        "trades": 3,
        "duration": "42 мин.",
        "participants": 290
      },
      "description": "Анализируем объем платежей через Visa как индикатор здоровья мировой экономики и устойчивость прибыли Procter & Gamble."
    },
    6: {
      "title": "Чипы и логистика: Фундамент индустрии",
      "date": "23 января 2026",
      "tickers": ["NASDAQ:INTC", "NASDAQ:CSX"],
      "videoId": "CHIPS_WEBINAR_06",
      "videoUrl": "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
      "screenshot": "https://drive.google.com/file/d/YOUR_SCREENSHOT_ID/view?usp=sharing",
      "stats": {
        "result": "-2.5%",
        "trades": 2,
        "duration": "38 мин.",
        "participants": 340
      },
      "description": "Обсуждаем технологическую гонку Intel и состояние логистических цепочек США через отчет железнодорожного гиганта CSX."
    },
    7: {
      "title": "Авиаперевозки: Динамика лоукостеров",
      "date": "26 января 2026",
      "tickers": ["NASDAQ:RYAAY"],
      "videoId": "RYANAIR_WEBINAR_07",
      "videoUrl": "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
      "screenshot": "https://drive.google.com/file/d/YOUR_SCREENSHOT_ID/view?usp=sharing",
      "stats": {
        "result": "+7.4%",
        "trades": 1,
        "duration": "35 мин.",
        "participants": 210
      },
      "description": "Разбираем финансовые показатели Ryanair. Обсуждаем стоимость топлива и готовность европейцев тратить деньги на полеты."
    },
    8: {
      "title": "Промышленность и Авто: Вызовы производства",
      "date": "27 января 2026",
      "tickers": ["NYSE:BA", "NYSE:GM"],
      "videoId": "BOEING_GM_08",
      "videoUrl": "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
      "screenshot": "https://drive.google.com/file/d/YOUR_SCREENSHOT_ID/view?usp=sharing",
      "stats": {
        "result": "+11.0%",
        "trades": 3,
        "duration": "50 мин.",
        "participants": 405
      },
      "description": "Анализируем портфель заказов Boeing и темпы перехода General Motors на электромобили в новом квартале."
    },
    9: {
      "title": "День мега-капитализации: ИИ и Технологии",
      "date": "29 января 2026",
      "tickers": ["NASDAQ:MSFT", "NASDAQ:TSLA", "NYSE:IBM", "NYSE:T", "NASDAQ:AMZN", "NYSE:CAT", "NASDAQ:HON", "NYSE:LMT"],
      "videoId": "BIGTECH_WEBINAR_09",
      "videoUrl": "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
      "screenshot": "https://drive.google.com/file/d/YOUR_SCREENSHOT_ID/view?usp=sharing",
      "stats": {
        "result": "+34.2%",
        "trades": 8,
        "duration": "120 мин.",
        "participants": 1250
      },
      "description": "Самый важный день сезона. Обсуждаем успехи Microsoft в области ИИ, маржинальность Tesla и доходы Amazon Cloud."
    },
    10: {
      "title": "Итоги квартала: Премиальный сегмент",
      "date": "30 января 2026",
      "tickers": ["NASDAQ:AAPL", "NYSE:AXP"],
      "videoId": "APPLE_WEBINAR_10",
      "videoUrl": "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
      "screenshot": "https://drive.google.com/file/d/YOUR_SCREENSHOT_ID/view?usp=sharing",
      "stats": {
        "result": "+15.6%",
        "trades": 4,
        "duration": "58 мин.",
        "participants": 890
      },
      "description": "Завершаем неделю анализом продаж iPhone и данных по кредитным расходам владельцев карт American Express."
    },
    11: {
      "title": "Потребительский сектор и Фармацевтика",
      "date": "3 февраля 2026",
      "tickers": ["NASDAQ:PEP", "NASDAQ:AMGN", "NYSE:PFE", "NASDAQ:SBUX"],
      "videoId": "WEB_FEB_03",
      "videoUrl": "...",
      "screenshot": "...",
      "stats": { "result": "0.0%", "trades": 0, "duration": "0 мин.", "participants": 0 },
      "description": "Анализируем отчеты гигантов потребления PepsiCo и Starbucks. Также оцениваем доходы биофармацевтики Pfizer и Amgen."
    },
    12: {
      "title": "Битва Технологий и Платежных Систем",
      "date": "4 февраля 2026",
      "tickers": ["NASDAQ:AMD", "NASDAQ:EA", "NASDAQ:GOOGL", "NASDAQ:META", "NYSE:MA", "NYSE:MCD"],
      "videoId": "WEB_FEB_04",
      "videoUrl": "...",
      "screenshot": "...",
      "stats": { "result": "0.0%", "trades": 0, "duration": "0 мин.", "participants": 0 },
      "description": "Ключевой день: доходы Google и Meta от рекламы, чипы AMD и игровые тренды EA. Дополняем картину данными Mastercard и McDonald’s."
    },
    13: {
      "title": "Дивидендные аристократы и Телеком",
      "date": "5 февраля 2026",
      "tickers": ["NYSE:PM", "NASDAQ:VOD"],
      "videoId": "WEB_FEB_05",
      "videoUrl": "...",
      "screenshot": "...",
      "stats": { "result": "0.0%", "trades": 0, "duration": "0 мин.", "participants": 0 },
      "description": "Оцениваем устойчивость Philip Morris и состояние европейского телеком-рынка через отчет Vodafone."
    }
};

// Show results modal
function showResults(id) {
    const modal = document.getElementById('resultsModal');
    const modalBody = document.getElementById('modalBody');
    const data = webinarResults[id];
    
    if (!data) {
        console.error('Webinar data not found');
        return;
    }
    
    // Build ticker tags HTML
    let tickerTags = '';
    data.tickers.forEach(ticker => {
        tickerTags += `<tv-ticker-tag symbol="${ticker}"></tv-ticker-tag>`;
    });
    
    // Build stats HTML
    const statsHTML = `
        <div class="result-stats">
            <div class="stat-item">
                <div class="stat-label">Результат</div>
                <div class="stat-value positive">${data.stats.result}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Сделок</div>
                <div class="stat-value">${data.stats.trades}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Длительность</div>
                <div class="stat-value">${data.stats.duration}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Участников</div>
                <div class="stat-value">${data.stats.participants}</div>
            </div>
        </div>
    `;
    
    // Build screenshot HTML
    const screenshotHTML = data.screenshot 
        ? `<img src="${data.screenshot}" alt="Результаты торговли">` 
        : '<div style="padding: 60px; text-align: center;">Скриншот результатов';
    
    // Build modal content
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${data.title}</h2>
            <p class="modal-date">${data.date}</p>
            <div class="card-tickers" style="margin-top: 16px;">
                <script type="module" src="https://widgets.tradingview-widget.com/w/en/tv-ticker-tag.js"></script>
                ${tickerTags}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Статистика вебинара</h3>
            ${statsHTML}
        </div>
        
        <div class="modal-section">
            <h3>Видео-запись</h3>
            <div class="video-container">
                <iframe src="${data.videoUrl}" allow="autoplay" allowfullscreen></iframe>
            </div>
            <a href="${data.videoUrl.replace('/preview', '/view')}" target="_blank" class="video-link">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M14 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 13V3h12v10H2z"/>
                    <path d="M6 5v6l5-3-5-3z"/>
                </svg>
                Открыть видео в новом окне
            </a>
        </div>
        
        <div class="modal-section">
            <h3>Результаты торговли</h3>
            <div class="screenshot-placeholder">
                ${screenshotHTML}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>Описание</h3>
            <p style="color: var(--text-secondary); line-height: 1.8;">${data.description}</p>
        </div>
    `;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Re-initialize TradingView widgets
    reinitializeTradingViewWidgets();
}

// Close modal
function closeModal() {
    const modal = document.getElementById('resultsModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('resultsModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Function to reinitialize TradingView widgets in modal
function reinitializeTradingViewWidgets() {
    // This helps ensure TradingView widgets load properly in dynamically added content
    setTimeout(() => {
        const scripts = document.querySelectorAll('#modalBody script[src*="tradingview"]');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.type = 'module';
            newScript.src = script.src;
            script.parentNode.replaceChild(newScript, script);
        });
    }, 100);
}

// Add loading animation on page load
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add intersection observer for card animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all webinar cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.webinar-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0.2';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.3s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

console.log('🚀 Торговля на отчетах - сайт загружен успешно!');
