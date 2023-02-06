import { Module } from '@nestjs/common';
import { LockedStoryModule } from 'src/locked-story/locked-story.module';
import { SentenceModule } from 'src/sentence/sentence.module';
import { StoryModule } from 'src/story/story.module';
import { WsGateway } from './ws-gateway';

@Module({
  imports: [StoryModule, SentenceModule, LockedStoryModule],
  providers: [WsGateway],
})
export class WsGatewayModule {}
