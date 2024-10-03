import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/Entity/orderEntity';
import { User } from 'src/Entity/userEntity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) { }

  findAll(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  findOne( order_id: number): Promise<Order> {
    return this.orderRepository.findOneBy({  order_id });
  }

  create(order: Order): Promise<Order> {
    return this.orderRepository.save(order);
  }


  delete( order_id: number): Promise<Order> {
    return this.orderRepository.delete( order_id).then(() => {
      return this.findOne( order_id);
    });
  }

  deleteAll(): void {
    this.orderRepository.clear();
}
}