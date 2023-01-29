import { SentenceEntity } from "./sentence.entity";

export interface Story {
    id: number;
    isFinished: boolean;
    upvotes: number;
    sentences: SentenceEntity[];
}