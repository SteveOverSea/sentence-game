import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StoryEntity } from "./story.entity";

@Entity("sentences")
export class SentenceEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 140 })
    content: string;

    @Column("varchar", { length: 2 })
    language: string;

    @Column()
    userId: string;

    @Column({ nullable: true })
    authorMail: string;

    @ManyToOne(() => StoryEntity, story => story.sentences)
    story: StoryEntity;
}