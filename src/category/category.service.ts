import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(userId: number, createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create({ ...createCategoryDto, user: { id: userId } });
    return this.categoryRepository.save(category);
  }

  async findAll(userId: number) {
    return this.categoryRepository.find({ where: { user: { id: userId } } });
  }

  async findOne(userId: number, id: number) {
    return this.categoryRepository.findOne({ where: { id, user: { id: userId } } });
  }

  async update(userId: number, id: number, updateCategoryDto: UpdateCategoryDto) {
    await this.categoryRepository.update({ id, user: { id: userId } }, updateCategoryDto);
    return this.categoryRepository.findOne({ where: { id, user: { id: userId } } });
  }

  async remove(userId: number, id: number) {
    await this.categoryRepository.delete({ id, user: { id: userId } });
    return { deleted: true };
  }
}
