import { Test, TestingModule } from '@nestjs/testing';
import { LockedStory } from '../entities/locked-story.interface';
import { TypeOrmTestingModule } from '../../test/db-test/typeorm-testing.module';
import { LockedStoryService } from './locked-story.service';
import { DbSeedsService } from 'test/db-test/db-seeds.service';

describe('LockedStoryService', () => {
  let lockedStoryService: LockedStoryService;
  let dbSeedsService: DbSeedsService;
  const storyId: number = 1;
  const clientId: string = '1';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingModule],
      providers: [LockedStoryService, DbSeedsService],
    }).compile();

    lockedStoryService = module.get<LockedStoryService>(LockedStoryService);
    dbSeedsService = module.get<DbSeedsService>(DbSeedsService);

    dbSeedsService.insertLockedStorieSeed(storyId);
  });

  it('should add and get a locked entry', async () => {
    const lockedStory: LockedStory = {
      clientId,
      story: {
        id: storyId,
      },
    };

    await lockedStoryService.add(lockedStory);
    const foundStory = await lockedStoryService.get(clientId);

    expect(foundStory.story.id).toBe(lockedStory.story.id);
    expect(await lockedStoryService.has(clientId)).toBe(true);
  });

  it('should not find a lockedStory after removing it', async () => {
    await lockedStoryService.remove(clientId);

    const foundStory = await lockedStoryService.get(clientId);

    expect(foundStory).toBeNull();
    expect(await lockedStoryService.has(clientId)).toBe(false);
  });
});
