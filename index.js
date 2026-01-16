const cors_proxy = require('cors-anywhere');

cors_proxy.createServer({
    originWhitelist: [], // Bárki elérheti
    requireHeader: [],   // Nem várunk el speciális fejlécet a klienstől
    removeHeaders: [
        'x-frame-options',
        'content-security-policy',
        'set-cookie',
        'expect-ct'
    ],
    setHeaders: {
        // Elhitetjük a TV2-vel, hogy tőle jön a kérés
        'origin': 'https://tv2play.hu',
        'referer': 'https://tv2play.hu',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
    }
}).listen(3000, '0.0.0.0', () => {
    console.log('Emelt szintű proxy fut...');
});
