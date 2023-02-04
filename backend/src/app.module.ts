import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from './config/typeorm.config';
import { SentenceModule } from './sentence/sentence.module';
import { StoryModule } from './story/story.module';
import { WsGatewayModule } from './ws-gateway/ws-gateway.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    SentenceModule,
    StoryModule,
    WsGatewayModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
