import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import typeormConfig from './config/typeorm.config';
import { SentenceModule } from './sentence/sentence.module';
import { StoryModule } from './story/story.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    SentenceModule,
    StoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
