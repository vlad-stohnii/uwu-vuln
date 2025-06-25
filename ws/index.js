const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  // RCE
  ws.on('message', msg => {
    eval(msg); 
    ws.send('Executed: ' + msg);
  });
});

console.log('WebSocket vuln on port 8080');
