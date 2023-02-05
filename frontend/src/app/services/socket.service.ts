import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Injectable({
    providedIn: 'root'
})
export class SocketService {
    constructor(private socket: Socket) {}

    public verifyReceivedStoryId( storyId: number): void {
        this.socket.emit('receivedStory', { storyId });
    }
}