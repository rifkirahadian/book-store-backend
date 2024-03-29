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

  async findAllByEmail(
    email: string,
    limit: number,
    offset: number,
  ): Promise<{ rows: Order[]; count: number }> {
    return this.ordersRepository.findAndCountAll({
      where: { email },
      limit,
      offset,
    });
  }

  async findById(id: number): Promise<Order> {
    return this.ordersRepository.findByPk(id);
  }

  async cancelOrder(order: Order) {
    order.status = 'cancelled';
    await order.save();
  }
}
