import { Sentence } from './sentence.interface';

export interface Story {
  id: number;
  isFinished: boolean;
  isLocked: boolean;
  upvotes: number;
  sentences: Sentence[];
  lastEditedBy: string;
}
