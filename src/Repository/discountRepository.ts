import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Discount } from 'src/Entity/discountEntity';

@Injectable()
export class DiscountService {
  constructor(
    @InjectRepository(Discount)
    private readonly discountRepository: Repository<Discount>,
  ) { }

  findAll(): Promise<Discount[]> {
    return this.discountRepository.find();
  }

  findOne( discount_id: number): Promise<Discount> {
    return this.discountRepository.findOneBy({  discount_id });
  }

  create(discount: Discount): Promise<Discount> {
    return this.discountRepository.save(discount);
  }


  delete( discount_id: number): Promise<Discount> {
    return this.discountRepository.delete( discount_id).then(() => {
      return this.findOne( discount_id);
    });
  }

  deleteAll(): void {
    this.discountRepository.clear();
}
}