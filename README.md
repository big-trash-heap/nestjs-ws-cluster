Для теста в `postman` использовать

```bash
url:                      http://localhost:3223/
socket.io.client:         v4
socket.io.handshake.path: /ws/gateway
```

Событие `events`, `message` с телом  
_(на эти события так же нужно подписаться на чтения)_

```json
{
  "name": "Kirill"
}
```

Учесть что клиентский драйвер может сам подставить `handshake` из пути подключение `http://localhost:3223/ws/gateway`, в случаи с `postman` этого не происходит
