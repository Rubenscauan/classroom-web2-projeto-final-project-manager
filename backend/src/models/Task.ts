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
import { Project } from "./Project";
import { Sprint } from "./Sprint";
import { User } from "./User";
import { Comment } from "./Comment";

@Entity("tasks")
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 180 })
  title!: string;

  @Column({ type: "text", nullable: true })
  description?: string | null;

  @Column({ type: "text", default: "todo" })
  status!: string;

  @Column({ type: "text", default: "medium" })
  priority!: string;

  @Column({ type: "date", nullable: true })
  dueDate?: string | null;

  @ManyToOne(() => Project, (project) => project.tasks, { nullable: false })
  @JoinColumn({ name: "projectId" })
  project!: Project;

  @Column()
  projectId!: number;

  @ManyToOne(() => Sprint, (sprint) => sprint.tasks, { nullable: true })
  @JoinColumn({ name: "sprintId" })
  sprint?: Sprint | null;

  @Column({ nullable: true })
  sprintId?: number | null;

  @ManyToOne(() => User, (user) => user.tasks, { nullable: true })
  @JoinColumn({ name: "assigneeId" })
  assignee?: User | null;

  @Column({ nullable: true })
  assigneeId?: number | null;

  @OneToMany(() => Comment, (comment) => comment.task)
  comments!: Comment[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
