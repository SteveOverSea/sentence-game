import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StoryEntity } from "src/entities/story.entity";
import { StoryController } from "./story.controller";
import { StoryService } from "./story.service";

@Module({
    imports: [TypeOrmModule.forFeature([StoryEntity])],
    controllers: [StoryController],
    exports: [StoryService],
    providers: [StoryService]
})
export class StoryModule {}