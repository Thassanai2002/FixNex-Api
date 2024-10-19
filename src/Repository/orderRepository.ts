import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/Entity/orderEntity';
import { Product } from 'src/Entity/productEntity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(Product) // เพิ่มการ InjectRepository ตรงนี้
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  findOne(order_id: number): Promise<Order> {
    return this.orderRepository.findOneBy({ order_id });
  }

  create(order: Order): Promise<Order> {
    return this.orderRepository.save(order);
  }

  delete(order_id: number): Promise<Order> {
    return this.orderRepository.delete(order_id).then(() => {
      return this.findOne(order_id);
    });
  }

  deleteAll(): void {
    this.orderRepository.clear();
  }

  async update(order_id: number, updateData: Partial<Order>): Promise<Order> {
    await this.orderRepository.update(order_id, updateData); // อัปเดตข้อมูล
    return this.orderRepository.findOneBy({ order_id }); // คืนค่าข้อมูลผู้ใช้ที่อัปเดต
  }

  async findOrdersWithOrderid(userId: number): Promise<any> {
    return await this.orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.orderItems', 'orderItem')
      .leftJoinAndSelect('orderItem.product', 'product') // JOIN กับ product entity
      .where('order.user_id = :userId', { userId })
      .select([
        'order.order_id',
        'order.oder_date',
        'order.total_amount',
        'order.status',
        'orderItem.quantity',
        'orderItem',
        'orderItem.price',
        'product.product_name',
        'product.unit_price',
      ])
      .getMany();
  }
  
  
  
  
}
