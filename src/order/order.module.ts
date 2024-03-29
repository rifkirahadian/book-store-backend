import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { ordersProviders } from './order.provider';
import { OrdersService } from './order.service';
import { BooksService } from 'src/book/book.service';
import { booksProviders } from 'src/book/book.provider';

@Module({
  controllers: [OrderController],
  providers: [
    ...ordersProviders,
    ...booksProviders,
    OrdersService,
    BooksService,
  ],
})
export class OrderModule {}
