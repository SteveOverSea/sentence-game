import { TypeOrmModule } from '@nestjs/typeorm';
import { LockedStoryEntity } from 'src/entities/locked-story.entity';
import { SentenceEntity } from 'src/entities/sentence.entity';
import { StoryEntity } from 'src/entities/story.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const TypeOrmTestingModule = [
  TypeOrmModule.forRoot({
    type: 'postgres',
    database: 'dev',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    schema: 'test',
    dropSchema: true,
    entities: [StoryEntity, SentenceEntity, LockedStoryEntity],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([LockedStoryEntity, StoryEntity, SentenceEntity]),
];
