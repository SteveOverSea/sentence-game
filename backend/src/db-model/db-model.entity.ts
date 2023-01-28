import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("example")
export class ExampleModel extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}