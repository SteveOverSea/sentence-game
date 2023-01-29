import { StoryEntity } from "./story.entity";

export interface Sentence {
    id: number;
    content: string;
    language: string;
    userId: string;
    authorMail?: string;
    story: StoryEntity;
}