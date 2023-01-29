import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    authorMail: string;
}