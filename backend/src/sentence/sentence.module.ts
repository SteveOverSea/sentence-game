import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SentenceEntity } from "src/entities/sentence.entity";
import { SentenceController } from "./sentence.controller";
import { SentenceService } from "./sentence.service";

@Module({
    imports: [TypeOrmModule.forFeature([SentenceEntity])],
    controllers: [SentenceController],
    providers: [SentenceService],
})
export class SentenceModule {}