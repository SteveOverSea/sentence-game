import { Story } from "./public/story.interface";

export interface LockedStory {
    clientId: string;
    story: Partial<Story>;
}  