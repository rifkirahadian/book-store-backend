import { Injectable, Inject } from '@nestjs/common';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDERS_REPOSITORY')
    private ordersRepository: typeof Order,
  ) {}

  async create(payload: {
    email: string;
    name: string;
    bookId: number;
    point: number;
  }): Promise<Order> {
    return this.ordersRepository.create(payload);
  }
}
