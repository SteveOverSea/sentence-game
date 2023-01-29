import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { SentenceEntity } from "src/entities/sentence.entity";
import { Sentence } from "src/entities/sentence.interface";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

@Injectable()
export class SentenceService {
    constructor(
        @InjectRepository(SentenceEntity)
        private readonly sentenceRepository: Repository<SentenceEntity>
    ) {}

    getAll(): Observable<Sentence[]> {
        return from(this.sentenceRepository.find({
            relations: {
                story: true
            }
        }));
    }

    getOne(id: number): Observable<Sentence> {
        return from(this.sentenceRepository.findOne({ 
            where: {
                id,
            },
            relations: {
                story: true
            }
        }));
    }

    create(sentence: Sentence): Observable<Sentence> {
        return from(this.sentenceRepository.save(sentence));
    }

    update(id: number, sentence: Sentence): Observable<UpdateResult> {
        return from(this.sentenceRepository.update(id, sentence));
    }

    delete(id: number): Observable<DeleteResult> {
        return from(this.sentenceRepository.delete(id));
    }
}