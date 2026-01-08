// Registration function
function registerWebinar(id) {
    alert(`Спасибо за интерес! Вы регистрируетесь на вебинар #${id}.\n\nВ реальном проекте здесь будет форма регистрации или перенаправление на страницу оплаты.`);
    // Here you can add real registration logic:
    // - Open registration form modal
    // - Redirect to payment page
    // - Send data to backend API
}

// Modal data for past webinars
const webinarResults = {
    1: {
        title: "Банковский сектор (Открытие сезона отчетов)",
        date: "14 января 2026",
        tickers: ["NYSE:BAC, NYSE:WFC, NYSE:C"],
        videoId: "YOUR_VIDEO_ID_1",
        videoUrl: "https://drive.google.com/file/d/1PyWKMTO5cj_evzUteR1ZlQ1tnJjDKQXb/view?usp=sharing",
        screenshot: "", // Add screenshot URL here
        stats: {
            result: "+18.5%",
            trades: 3,
            duration: "48 мин.",
            participants: 456
        },
        description: "Анализируем отчетность крупнейших коммерческих банков США. Обсуждаем влияние процентных ставок на чистую прибыль и ищем точки входа."
    },
    2: {
        title: "Фармацевтика: итоги года",
        date: "28 декабря 2025",
        tickers: ["NYSE:PFE", "NYSE:JNJ", "NASDAQ:MRNA"],
        videoId: "YOUR_VIDEO_ID_2",
        videoUrl: "https://drive.google.com/file/d/YOUR_FILE_ID/preview",
        screenshot: "",
        stats: {
            result: "+12.3%",
            trades: 5,
            duration: "3 ч",
            participants: 203
        },
        description: "Комплексный анализ годовых отчетов крупнейших фармацевтических компаний. Особое внимание уделили разделу R&D и pipeline новых препаратов. Торговая стратегия включала как краткосрочные, так и среднесрочные позиции."
    },
    3: {
        title: "Semiconductor отчеты Q3",
        date: "20 декабря 2025",
        tickers: ["NASDAQ:NVDA", "NASDAQ:AMD", "NASDAQ:INTC"],
        videoId: "YOUR_VIDEO_ID_3",
        videoUrl: "https://drive.google.com/file/d/YOUR_FILE_ID/preview",
        screenshot: "",
        stats: {
            result: "+15.7%",
            trades: 4,
            duration: "2.8 ч",
            participants: 187
        },
        description: "Углубленный разбор отчетов производителей полупроводников. Анализировали динамику спроса в сегменте AI-чипов и datacenter. Получили отличные результаты на волатильности после публикации отчетов NVIDIA и AMD."
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
        : '<div style="padding: 60px; text-align: center;">Скриншот результатов<br>(Placeholder)</div>';
    
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
            <h3>📊 Статистика вебинара</h3>
            ${statsHTML}
        </div>
        
        <div class="modal-section">
            <h3>🎥 Видео-запись</h3>
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
            <h3>📸 Результаты торговли</h3>
            <div class="screenshot-placeholder">
                ${screenshotHTML}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>📝 Описание</h3>
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
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.3s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

console.log('🚀 Торговля на отчетах - сайт загружен успешно!');
