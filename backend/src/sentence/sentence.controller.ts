import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Observable } from "rxjs";
import { Sentence } from "src/entities/public/sentence.interface";
import { DeleteResult, UpdateResult } from "typeorm";
import { SentenceService } from "./sentence.service";

@Controller("sentence")
export class SentenceController {
    constructor(private readonly sentenceService: SentenceService) {}

    @Get()
    getAll(): Observable<Sentence[]> {
        return this.sentenceService.getAll();
    }

    @Get(":id")
    getOne(
        @Param("id") id: number
    ): Observable<Sentence> {
        return this.sentenceService.getOne(id);
    }

    @Post()
    create(@Body() sentence: Sentence): Observable<Sentence> {
        return this.sentenceService.create(sentence);
    }

    @Put(":id")
    update(
        @Param("id") id: number,
        @Body() sentence: Sentence
    ): Observable<UpdateResult> {
        return this.sentenceService.update(id, sentence);
    }

    @Delete(":id")
    delete(        
        @Param("id") id: number
    ): Observable<DeleteResult> {
        return this.sentenceService.delete(id);
    }
}