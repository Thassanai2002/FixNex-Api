import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from 'src/Entity/orderItemEntity';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,
  ) {}

  findAll(): Promise<OrderItem[]> {
    return this.orderItemRepository.find();
  }

  findOne(order_item_id: number): Promise<OrderItem> {
    return this.orderItemRepository.findOneBy({ order_item_id });
  }

  create(discount: OrderItem): Promise<OrderItem> {
    return this.orderItemRepository.save(discount);
  }

  delete(order_item_id: number): Promise<OrderItem> {
    return this.orderItemRepository.delete(order_item_id).then(() => {
      return this.findOne(order_item_id);
    });
  }

  deleteAll(): void {
    this.orderItemRepository.clear();
  }

  async update(order_item_id: number, updateData: Partial<OrderItem>): Promise<OrderItem> {
    await this.orderItemRepository.update(order_item_id, updateData); // อัปเดตข้อมูล
    return this.orderItemRepository.findOneBy({ order_item_id }); // คืนค่าข้อมูลผู้ใช้ที่อัปเดต
  }
}
