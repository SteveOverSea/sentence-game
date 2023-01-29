import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SentenceEntity } from "./sentence.entity";

@Entity("stories")
export class StoryEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    isFinished: boolean;

    @Column()
    upvotes: number;

    @OneToMany(() => SentenceEntity, sentence => sentence.id)
    sentences: SentenceEntity[];
}