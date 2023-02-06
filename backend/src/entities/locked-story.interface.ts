import { Story } from './public/story.interface';

export interface LockedStory {
  userId: string;
  story: Partial<Story>;
}
