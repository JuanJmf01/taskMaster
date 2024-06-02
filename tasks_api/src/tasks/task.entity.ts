import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export enum TaskState {
    PENDING = 'Pending',
    IN_PROGRESS = 'In Progress',
    DONE = 'Done',
}

@Entity({ name: 'tasks' })
export class Task {
    @PrimaryGeneratedColumn()
    taskId: number;

    @Column({length: 55})
    title: string;

    @Column({nullable: true, length: 505})
    description: string;

    @Column({
        type: 'enum',
        enum: TaskState,
        default: TaskState.PENDING
    })
    state: TaskState;

    @CreateDateColumn()
    creationDate: Date;
}
