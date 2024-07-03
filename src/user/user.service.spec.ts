import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async create(user: User): Promise<User> {
    const existingUserByEmail = await this.usersRepository.findOneBy({ email: user.email });
    if (existingUserByEmail) {
      throw new ConflictException('Email already exists');
    }

    const existingUserByPhone = await this.usersRepository.findOneBy({ phone: user.phone });
    if (existingUserByPhone) {
      throw new ConflictException('Phone number already exists');
    }

    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
