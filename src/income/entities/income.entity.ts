import { Category } from 'src/category/entities/category.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';


@Entity()
export class Income {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Category, category => category.id)
    category: Category;

    @Column('decimal', { precision: 10, scale: 2 })
    amount: number;

    @Column()
    description: string;

    @ManyToOne(() => User, user => user.incomes)
    user: User;

    @CreateDateColumn()
    timestamp: Date;
}
