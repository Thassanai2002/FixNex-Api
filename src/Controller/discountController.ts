import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Discount } from 'src/Entity/discountEntity';
import { DiscountService } from 'src/Repository/discountRepository';

@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Get()
  findAll(): Promise<Discount[]> {
    return this.discountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Discount> {
    return this.discountService.findOne(+id);
  }

  @Post()
  create(@Body() discount: Discount ): Promise<Discount> {
    return this.discountService.create(discount);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Discount> {
    return this.discountService.delete(+id);
  }

  @Delete()
  DeleteAll(): void {
    this.discountService.deleteAll();
  }
}