import { Injectable } from '@nestjs/common';
import { StoryEntity } from 'src/entities/story.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class DbSeedsService {
  constructor(private readonly entityManager: EntityManager) {}

  public insertLockedStorieSeed(storyId: number): void {
    this.entityManager.insert(StoryEntity, { id: storyId });
  }
}
