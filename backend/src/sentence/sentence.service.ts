import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { SentenceEntity } from 'src/entities/sentence.entity';
import { Sentence } from 'src/entities/public/sentence.interface';
import { DeleteResult, Not, Repository, UpdateResult } from 'typeorm';
import { StoryEntity } from 'src/entities/story.entity';

@Injectable()
export class SentenceService {
  constructor(
    @InjectRepository(SentenceEntity)
    private readonly sentenceRepository: Repository<SentenceEntity>,
    @InjectRepository(StoryEntity)
    private readonly storyRepository: Repository<StoryEntity>,
  ) {}

  getAll(): Observable<Sentence[]> {
    return from(
      this.sentenceRepository.find({
        relations: {
          story: true,
        },
      }),
    );
  }

  getLastByStoryAndClientId(
    storyId: number,
    clientId: string,
  ): Observable<Sentence> {
    return from(
      this.sentenceRepository.findOne({
        relations: {
          story: true,
        },
        where: {
          userId: Not(clientId),
          story: {
            id: storyId,
          },
        },
        order: {
          id: 'desc',
        },
      }),
    );
  }

  getOne(id: number): Observable<Sentence> {
    return from(
      this.sentenceRepository.findOne({
        where: {
          id,
        },
        relations: {
          story: true,
        },
      }),
    );
  }

  createAndUnlock(sentence: Sentence): Observable<Sentence> {
    this.storyRepository.update(sentence.story, {
      isLocked: false,
      lastEditedBy: sentence.userId,
    });
    return from(this.sentenceRepository.save(sentence));
  }

  update(id: number, sentence: Sentence): Observable<UpdateResult> {
    return from(this.sentenceRepository.update(id, sentence));
  }

  delete(id: number): Observable<DeleteResult> {
    return from(this.sentenceRepository.delete(id));
  }
}
