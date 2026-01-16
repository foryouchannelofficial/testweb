const cors_proxy = require('cors-anywhere');
const port = process.env.PORT || 3000;

cors_proxy.createServer({
    originWhitelist: [], // Bárki elérheti
    removeHeaders: ['x-frame-options', 'content-security-policy']
}).listen(port, '0.0.0.0', () => {
    console.log('A proxy fut a ' + port + ' porton');
});
