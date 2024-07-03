import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ExpenseModule } from './expense/expense.module';
import { IncomeModule } from './income/income.module';
import { Category } from './category/entities/category.entity';
import { Expense } from './expense/entities/expense.entity';
import { Income } from './income/entities/income.entity';
import { User } from './user/entities/user.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'finance_manager',
    entities: [User, Income, Expense, Category],
    synchronize: true,
  }), UserModule, CategoryModule, ExpenseModule, IncomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
