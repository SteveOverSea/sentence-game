import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SentenceEntity } from 'src/entities/sentence.entity';
import { StoryEntity } from 'src/entities/story.entity';

import * as dotenv from 'dotenv';
import { LockedStoryEntity } from 'src/entities/locked-story.entity';


dotenv.config();

const entities = [
  SentenceEntity, 
  StoryEntity,
  LockedStoryEntity
];

export default {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    schema: process.env.DB_SCHEMA,
    entities,
    synchronize: process.env.IS_PRODUCTION !== "true",
  } as TypeOrmModuleOptions;