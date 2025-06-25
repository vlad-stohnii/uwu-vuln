const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  ws.on('message', msg => {
    eval(msg);               // исполнение входного кода
    ws.send('Executed: ' + msg);
  });
});

console.log('WS vuln on port 8080');