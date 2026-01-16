// js/video.js
function initWebinar() {
    const container = document.querySelector('#jitsi-container');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const isAdmin = urlParams.get('admin') === 'true';

    const domain = 'meet.jit.si';
    const options = {
        roomName: 'TradingView_Secure_Live_2026_xyz', // Придумай очень длинный ID
        width: '100%',
        height: '100%',
        parentNode: container,
        configOverwrite: {
            startWithAudioMuted: true,
            startWithVideoMuted: true,
            prejoinPageEnabled: false, // Отключает ввод имени и настройку камеры
            disableDeepLinking: true,
            enableWelcomePage: false,
            enableLobby: false,
            // Скрываем количество участников и их имена для зрителей
            disableRemoteMute: true,
            remoteVideoMenu: {
                disableKick: true
            }
        },
        interfaceConfigOverwrite: {
            // ДЛЯ ЗРИТЕЛЯ (не админа) убираем ВООБЩЕ ВСЁ
            TOOLBAR_BUTTONS: isAdmin 
                ? ['microphone', 'camera', 'desktop', 'fittowindow', 'hangup'] 
                : ['fullscreen'], // Зритель может только развернуть на весь экран
            
            SETTINGS_SECTIONS: isAdmin ? ['devices', 'language', 'profile'] : [],
            VIDEO_LAYOUT_FIT: 'both',
            SHOW_JITSI_WATERMARK: false,
            SHOW_WATERMARK_FOR_GUESTS: false,
            SHOW_BRAND_WATERMARK: false,
            DISPLAY_WELCOME_PAGE: false,
            // Скрываем список участников
            filmStripOnly: false, 
            VERTICAL_FILMSTRIP: false,
            HIDE_INVITE_ON_PAGE_START: true,
            RECENT_LIST_ENABLED: false
        }
    };

    const api = new JitsiMeetExternalAPI(domain, options);

    // Если зритель — автоматически выключаем ему всё, чтобы он даже не отображался
    if (!isAdmin) {
        api.executeCommand('toggleFilmStrip'); // Скрывает иконки участников
        api.executeCommand('subject', 'Прямой эфир'); // Убирает название комнаты
    }
}

window.onload = () => { setTimeout(initWebinar, 500); };
