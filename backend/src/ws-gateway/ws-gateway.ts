import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway } from "@nestjs/websockets";
import { Socket } from 'socket.io';

@WebSocketGateway(3030, { cors: "http://localhost:4200" })
export class WsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    
    handleConnection(client: Socket) {
        console.log("client connected ", client.id);
    }
    
    handleDisconnect(client: Socket) {
        console.log("client disconnected ", client.id);
    }
}