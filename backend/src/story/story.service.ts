import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { StoryEntity } from "src/entities/story.entity";
import { Story } from "src/entities/story.interface";
import { DeleteResult, Repository, UpdateResult } from "typeorm";

@Injectable()
export class StoryService {
    constructor(
        @InjectRepository(StoryEntity)
        private readonly storyRepository: Repository<StoryEntity>,
    ) {}

    getAll(): Observable<Story[]> {
        return from(this.storyRepository.find({
            relations: {
                sentences: true
            }
        }));
    }

    getOne(id: number): Observable<Story> {
        return from(this.storyRepository.findOne({
            where: {
                id,
            },
            relations: {
                sentences: true
            }
        }));
    }

    create(story: Story): Observable<Story> {
        return from(this.storyRepository.save(story));
    }

    update(id: number, story: Story): Observable<UpdateResult> {
        return from(this.storyRepository.update(id, story));
    }

    delete(id: number): Observable<DeleteResult> {
        return from(this.storyRepository.delete(id));
    }
}