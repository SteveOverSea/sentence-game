import { BaseEntity, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { StoryEntity } from "./story.entity";

@Entity("locked-stories")
export class LockedStoryEntity extends BaseEntity {
    
    @PrimaryColumn()
    clientId: string;

    @OneToOne(() => StoryEntity)
    @JoinColumn()
    story: StoryEntity;
}   