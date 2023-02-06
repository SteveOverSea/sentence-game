import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LockedStoryEntity } from 'src/entities/locked-story.entity';
import { LockedStory } from 'src/entities/locked-story.interface';
import { Repository } from 'typeorm';

@Injectable()
export class LockedStoryService {
  constructor(
    @InjectRepository(LockedStoryEntity)
    private readonly lockedStoryRepository: Repository<LockedStoryEntity>,
  ) {}

  add(lockedStory: LockedStory): void {
    this.lockedStoryRepository.save(lockedStory);
  }

  remove(userId: string): void {
    this.lockedStoryRepository.delete({ userId });
  }

  async has(userId: string): Promise<boolean> {
    const found = await this.lockedStoryRepository.findOne({
      where: { userId },
    });
    if (found) {
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  }

  get(userId: string): Promise<LockedStory> {
    return this.lockedStoryRepository.findOne({
      where: {
        userId,
      },
      relations: {
        story: true,
      },
    });
  }
}
