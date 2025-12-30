import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { User } from "./User";
import { Task } from "./Task";
import { Sprint } from "./Sprint";

@Entity("projects")
export class Project {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: "text", nullable: true })
  description?: string | null;

  @ManyToOne(() => User, (user) => user.projects, { nullable: false })
  @JoinColumn({ name: "ownerId" })
  owner!: User;

  @Column()
  ownerId!: number;

  @OneToMany(() => Sprint, (sprint) => sprint.project)
  sprints!: Sprint[];

  @OneToMany(() => Task, (task) => task.project)
  tasks!: Task[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
