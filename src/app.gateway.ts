import {
  MessageBody,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  path: '/ws/gateway',
  transports: ['websocket'],
  cors: {
    origin: '*',
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  private readonly server: Server;

  afterInit(server: Server) {
    console.log('init', server === this.server);
  }

  handleConnection(client: Socket) {
    console.log('connect', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('disconnect', client.id);
  }

  @SubscribeMessage('message')
  handleTypeMessage(
    @MessageBody()
    data: string,
  ): WsResponse<string> {
    console.log('Message', data);
    return {
      event: 'message',
      data: `reply<message>: ${JSON.stringify(data)}`,
    };
  }

  @SubscribeMessage('events')
  handleTypeEvents(@MessageBody() data: string): WsResponse<string> {
    console.log('Events', data);
    return { event: 'events', data: `reply<events>: ${JSON.stringify(data)}` };
  }
}
