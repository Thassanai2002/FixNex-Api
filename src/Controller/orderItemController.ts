import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { OrderItem } from 'src/Entity/orderItemEntity';
import { OrderItemService } from 'src/Repository/orderItemRepository';

@Controller('orderItem')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  @Get()
  findAll(): Promise<OrderItem[]> {
    return this.orderItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<OrderItem> {
    return this.orderItemService.findOne(+id);
  }

  @Post()
  create(@Body() order_item_id: OrderItem ): Promise<OrderItem> {
    return this.orderItemService.create(order_item_id);
  }

  @Delete(':id')
  delete(@Param('id') order_item_id: OrderItem): Promise<OrderItem> {
    return this.orderItemService.delete(+order_item_id);
  }

  @Delete()
  DeleteAll(): void {
    this.orderItemService.deleteAll();
  }

  @Patch(':id')
  update(@Param('id') order_item_id: string, @Body() user: Partial<OrderItem>): Promise<OrderItem> {
    return this.orderItemService.update(+order_item_id, user);
  }
}