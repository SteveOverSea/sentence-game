import { Module } from "@nestjs/common";
import { LockedStoryModule } from "src/locked-story/locked-story.module";
import { StoryModule } from "src/story/story.module";
import { WsGateway } from "./ws-gateway";

@Module({
    imports: [StoryModule, LockedStoryModule],
    providers: [WsGateway]
})
export class WsGatewayModule {}