import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable, of } from "rxjs";
import { StoryEntity } from "src/entities/story.entity";
import { Story } from "src/entities/public/story.interface";
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

    getFirstUnlockedAndLock(): Observable<Story> {
        return from(this.findFirstUnlockedAndLock());
    }

    private async findFirstUnlockedAndLock(): Promise<Story> {
        const firstUnlocked = await this.storyRepository.findOne({
            where: {
                isLocked: false
            },
            relations: {
                sentences: true
            }
        });

        if (firstUnlocked === null) {
            return this.storyRepository.save({
                isLocked: true,
            });
        }

        await this.storyRepository.update(firstUnlocked.id, {
            isLocked: true,
        });

        return this.storyRepository.findOne({
            where: {
                id: firstUnlocked.id,
            },
            relations: {
                sentences: true
            }
        });
    }

    create(story: Story): Observable<Story> {
        return from(this.storyRepository.save(story));
    }

    update(id: number, story: Partial<Story>): Observable<UpdateResult> {
        return from(this.storyRepository.update(id, story));
    }

    delete(id: number): Observable<DeleteResult> {
        return from(this.storyRepository.delete(id));
    }
}