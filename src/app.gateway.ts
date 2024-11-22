import {
  MessageBody,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, WebSocket } from 'ws';

@WebSocketGateway({
  path: '/ws/gateway',
  transports: ['websocket'],
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  private readonly server: Server;

  afterInit(server: Server) {
    console.log('init', server === this.server);
  }

  handleConnection(client: WebSocket) {
    console.log(
      'connect',
      client.readyState,
      client.url,
      this.server.clients.size,
    );
  }

  handleDisconnect(client: WebSocket) {
    console.log(
      'disconnect',
      client.readyState,
      client.url,
      this.server.clients.size,
    );
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
    console.log(data);
    return `replay: ${JSON.stringify(data)}`;
  }
}
