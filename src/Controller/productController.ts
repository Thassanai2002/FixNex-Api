import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { User } from 'src/Entity/userEntity';
import { UserService } from 'src/Repository/userRepository';
import { Product } from 'src/Entity/productEntity';
import { ProductService } from 'src/Repository/productRepository';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(+id);
  }

  @Post()
  create(@Body() Product: Product): Promise<Product> {
    return this.productService.create(Product);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Product> {
    return this.productService.delete(+id);
  }

  @Delete()
  DeleteAll(): void {
    this.productService.deleteAll();
  }

//   @Patch(':id')  // ใช้ PATCH สำหรับการอัปเดตข้อมูลบางส่วน
//   update(@Param('id') id: string, @Body() Product: Partial<Product>): Promise<Product> {
//     return this.productService.update(+id, Product);
//   }
}
