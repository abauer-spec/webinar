// js/video.js
function initWebinar() {
    const container = document.querySelector('#jitsi-container');
    
    // Проверка: есть ли контейнер на странице
    if (!container) return;

    const domain = 'meet.jit.si';
    const options = {
        roomName: 'TradingView_Live_Room_2026_Unique', // Убедись, что имя сложное
        width: '100%',
        height: '100%',
        parentNode: container,
        lang: 'ru',
        configOverwrite: {
            startWithAudioMuted: true,
            prejoinPageEnabled: false,
            disableDeepLinking: true,
        },
        interfaceConfigOverwrite: {
            // Если в ссылке есть ?admin=true, даем права админа
            TOOLBAR_BUTTONS: window.location.search.includes('admin=true') 
                ? ['microphone', 'camera', 'desktop', 'fullscreen', 'fittowindow', 'chat', 'settings'] 
                : ['fullscreen', 'fittowindow'],
        }
    };

    // Создаем интерфейс Jitsi
    const api = new JitsiMeetExternalAPI(domain, options);

    // Добавляем обработчик ошибок
    api.addEventListener('videoConferenceLeft', () => {
        window.location.href = 'index.html';
    });
}

// Запускаем через небольшую паузу после загрузки страницы
window.onload = () => {
    setTimeout(initWebinar, 500);
};
