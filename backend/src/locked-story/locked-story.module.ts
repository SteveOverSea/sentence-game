import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LockedStoryEntity } from "src/entities/locked-story.entity";
import { LockedStoryService } from "./locked-story.service";

@Module({
    imports: [TypeOrmModule.forFeature([LockedStoryEntity])],
    providers: [LockedStoryService],
    exports: [LockedStoryService]
})
export class LockedStoryModule {}