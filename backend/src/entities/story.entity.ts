import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SentenceEntity } from './sentence.entity';

@Entity('stories')
export class StoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: false,
  })
  isFinished: boolean;

  @Column({
    default: false,
  })
  isLocked: boolean;

  @Column({
    default: 0,
  })
  upvotes: number;

  @OneToMany(() => SentenceEntity, (sentence) => sentence.story)
  sentences: SentenceEntity[];

  @Column({
    nullable: true,
  })
  lastEditedBy: string;
}
