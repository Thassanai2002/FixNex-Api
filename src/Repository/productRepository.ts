import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/Entity/productEntity';
import { Repository } from 'typeorm';


@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) { }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne( product_id: number): Promise<Product> {
    return this.productRepository.findOneBy({  product_id });
  }

  create(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }


  delete( product_id: number): Promise<Product> {
    return this.productRepository.delete( product_id).then(() => {
      return this.findOne( product_id);
    });
  }

  deleteAll(): void {
    this.productRepository.clear();
}


  async update( product_id: number, updateData: Partial<Product>): Promise<Product> {
    await this.productRepository.update( product_id, updateData); // อัปเดตข้อมูล
    return this.productRepository.findOneBy({  product_id }); // คืนค่าข้อมูลผู้ใช้ที่อัปเดต
  }
}
