import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { Order } from 'src/Entity/orderEntity';
import { OrderService } from 'src/Repository/orderRepository';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Order> {
    return this.orderService.findOne(+id);
  }

  @Post()
  create(@Body() Order: Order ): Promise<Order> {
    return this.orderService.create(Order);
  }

  

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Order> {
    return this.orderService.delete(+id);
  }

  @Delete()
  DeleteAll(): void {
    this.orderService.deleteAll();
  }
}