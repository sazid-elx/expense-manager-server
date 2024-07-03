import { User } from 'src/user/entities/user.entity';
import {  Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, Column } from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(() => User, user => user.categories)
    user: User;

    @CreateDateColumn()
    timestamp: Date;
}
