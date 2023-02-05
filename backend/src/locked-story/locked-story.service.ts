import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LockedStoryEntity } from "src/entities/locked-story.entity";
import { LockedStory } from "src/entities/locked-story.interface";
import { Repository } from "typeorm";

@Injectable()
export class LockedStoryService {

    constructor(
        @InjectRepository(LockedStoryEntity)
        private readonly lockedStoryRepository: Repository<LockedStoryEntity>
    ) {}  

    add(lockedStory: LockedStory): void {
        this.lockedStoryRepository.save(lockedStory);
    }

    remove(clientId: string): void {
        this.lockedStoryRepository.delete({ clientId });
    } 

    async has(clientId: string): Promise<boolean> {
        const found = await this.lockedStoryRepository.findOne({ where: { clientId }});
        if (found) {
            return Promise.resolve(true);
        } else {
            return Promise.resolve(false);
        }
    } 

    get(clientId: string): Promise<LockedStory> {
        return this.lockedStoryRepository.findOne({
            where: {
                clientId
            },
            relations: {
                story: true
            },
        });
    }
} 