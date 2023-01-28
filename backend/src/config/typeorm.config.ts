import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { ExampleModel } from 'src/db-model/db-model.entity';

dotenv.config();

export default {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    schema: process.env.DB_SCHEMA,
    entities: [ExampleModel],
    synchronize: process.env.IS_PRODUCTION !== "true",
  } as TypeOrmModuleOptions;