import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post(':userId')
  create(@Param('userId') userId: string, @Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(+userId, createCategoryDto);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    return this.categoryService.findAll(+userId);
  }

  @Get(':userId/:id')
  findOne(@Param('userId') userId: string, @Param('id') id: string) {
    return this.categoryService.findOne(+userId, +id);
  }

  @Patch(':userId/:id')
  update(@Param('userId') userId: string, @Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+userId, +id, updateCategoryDto);
  }

  @Delete(':userId/:id')
  remove(@Param('userId') userId: string, @Param('id') id: string) {
    return this.categoryService.remove(+userId, +id);
  }
}
