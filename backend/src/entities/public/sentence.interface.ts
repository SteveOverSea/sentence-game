import { Story } from "./story.interface";

export interface Sentence {
    id: number;
    content: string;
    language: string;
    userId: string;
    authorMail?: string;
    story: Story;
}