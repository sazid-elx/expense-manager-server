import { Category } from 'src/category/entities/category.entity';
import { Expense } from 'src/expense/entities/expense.entity';
import { Income } from 'src/income/entities/income.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, Unique } from 'typeorm';

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    phone: string;

    @Column()
    password: string;

    @OneToMany(() => Category, category => category.user)
    categories: Category[];

    @OneToMany(() => Income, income => income.user)
    incomes: Income[];

    @OneToMany(() => Expense, expense => expense.user)
    expenses: Expense[];
}
