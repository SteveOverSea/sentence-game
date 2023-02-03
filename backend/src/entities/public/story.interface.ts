import { Sentence } from "./sentence.interface";

export interface Story {
    id: number;
    isFinished: boolean;
    upvotes: number;
    sentences: Sentence[];
}