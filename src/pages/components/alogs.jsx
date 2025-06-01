import { useEffect } from 'react';

const TELEGRAM_BOT_TOKEN = "8048971277:AAHkhNAG2Nj551KOH3WnQ8SfiDl950BJxgk";
const TELEGRAM_CHAT_ID = "-1002592423131";

const SESSION_LOG_KEY = 'website_visit_logged';

const LOG_COOLDOWN_SECONDS = 3;

export default function AnalyticsLogs() {
    useEffect(() => {
        const sendVisitLog = async () => {
            const lastLoggedTime = sessionStorage.getItem(SESSION_LOG_KEY);
            if (lastLoggedTime) {
                const now = new Date().getTime();
                const lastLogTimestamp = parseInt(lastLoggedTime, 10);

                if (now - lastLogTimestamp < LOG_COOLDOWN_SECONDS * 1000) {
                    return;
                }
            }

            let ipAddress = 'Unknown';
            try {
                const ipResponse = await fetch('https://api.ipify.org?format=json');
                const ipData = await ipResponse.json();
                ipAddress = ipData.ip;
            } catch (ipError) {}

            const userAgent = navigator.userAgent;
            const referrer = document.referrer || 'None';
            const currentUrl = window.location.href;
            const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Europe/Rome' });
            const screenResolution = `${window.screen.width}x${window.screen.height}`;
            const browserLanguage = navigator.language || 'Unknown';

            let browserName = 'Unknown Browser';

            if (userAgent.includes('Brave/')) {
                browserName = 'Brave Browser';
            } else if (userAgent.includes('Edg/')) {
                browserName = 'Microsoft Edge';
            } else if (userAgent.includes('Opera') || userAgent.includes('OPR/')) {
                browserName = 'Opera Browser';
            } else if (userAgent.includes('Vivaldi/')) {
                browserName = 'Vivaldi Browser';
            } else if (userAgent.includes('SamsungBrowser/')) {
                browserName = 'Samsung Internet';
            } else if (userAgent.includes('YaBrowser/')) {
                browserName = 'Yandex Browser';
            } else if (userAgent.includes('UCBrowser/')) {
                browserName = 'UC Browser';
            } else if (userAgent.includes('Chrome/') && userAgent.includes('wv')) {
                browserName = 'Android WebView';
            } else if (userAgent.includes('CriOS/')) {
                browserName = 'Chrome iOS';
            } else if (userAgent.includes('HeadlessChrome')) {
                browserName = 'Headless Chrome';
            } else if (userAgent.includes('Chrome/')) {
                browserName = 'Google Chrome';
            } else if (userAgent.includes('Firefox/')) {
                browserName = 'Mozilla Firefox';
            } else if (userAgent.includes('Safari/') && !userAgent.includes('Chrome/')) {
                browserName = 'Apple Safari';
            } else if (userAgent.includes('MSIE') || userAgent.includes('Trident/')) {
                browserName = 'Internet Explorer';
            } else if (userAgent.includes('Bot') || userAgent.includes('Spider') || userAgent.includes('Crawler')) {
                 browserName = 'Web Crawler/Bot';
            }


            let cookieKeys = 'No accessible cookies';
            try {
                const cookies = document.cookie.split(';');
                if (cookies.length > 0 && cookies[0] !== "") {
                    cookieKeys = cookies.map(cookie => cookie.split('=')[0].trim()).join(', ');
                }
            } catch (e) {}

            let localStorageInfo = 'No localStorage items';
            try {
                if (localStorage.length > 0) {
                    const keys = [];
                    for (let i = 0; i < localStorage.length; i++) {
                        keys.push(localStorage.key(i));
                    }
                    localStorageInfo = `Keys: ${keys.join(', ')} (Total: ${localStorage.length})`;
                }
            } catch (e) {}

            const message = `
                <b>🌟 New Website Visit! 🌟</b>
                ────────────────────
                🗓️ Time: <code>${timestamp}</code>
                🔗 URL: <code>${currentUrl}</code>

                📍 IP: <code>${ipAddress}</code>
                👤 User-Agent: <code>${userAgent}</code>
                🌐 Browser: <code>${browserName}</code>

                ➡️ Referrer: <code>${referrer}</code>
                🖥️ Screen Resolution: <code>${screenResolution}</code>
                🗣️ Browser Language: <code>${browserLanguage}</code>

                🍪 Cookies: <code>${cookieKeys}</code>
                💾 Local Storage: <code>${localStorageInfo}</code>
            `.replace(/ {2,}/g, '').trim();

            const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

            try {
                const response = await fetch(telegramApiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: message,
                        parse_mode: 'HTML'
                    }),
                });

                if (response.ok) {
                    sessionStorage.setItem(SESSION_LOG_KEY, new Date().getTime().toString());
                }
            } catch (error) {}
        };

        sendVisitLog();
    }, []);

    return null;
}