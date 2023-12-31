import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Faculty } from './ƒaculty.entity';
import { Course } from './course.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 120 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Faculty, ({ departments }) => departments)
  faculty: Faculty;

  @OneToMany(() => Course, ({ belongsTo }) => belongsTo)
  coursesOwned: Course[];
}
