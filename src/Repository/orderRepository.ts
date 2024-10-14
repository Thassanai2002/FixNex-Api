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
    // Find orders by user_id
    const orders = await this.orderRepository.find({
      where: { user_id: userId },
      relations: ['oders', 'oders.orderItem'], // Load related OrderItems
    });
  
    const orderDetails = [];
  
    for (const order of orders) {
      const orderItemsDetails = await Promise.all(
        order.oders.map(async (orderItem) => {
          // Find product details
          const product = await this.productRepository.findOne({
            where: { product_id: orderItem.product_id },
          });
          
          return {
            order_date: order.oder_date,
            quantity: orderItem.quantity,
            price: orderItem.price,
            product_name: product.product_name,
            unit_price: product.unit_price,
          };
        })
      );
  
      orderDetails.push({
        order_id: order.order_id,
        order_date: order.oder_date,
        total_amount: order.total_amount,
        status: order.status,
        items: orderItemsDetails,
      });
    }
  
    return orderDetails;
  }
  
}
