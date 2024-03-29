import { Body, Controller, Post, Res } from '@nestjs/common';
import { OrdersService } from './order.service';
import { Response } from 'express';
import { CreateOrderDto } from './order.dto';
import { BooksService } from 'src/book/book.service';

@Controller('order')
export class OrderController {
  constructor(
    private ordersService: OrdersService,
    private bookService: BooksService,
  ) {}

  @Post('')
  async create(@Body() payload: CreateOrderDto, @Res() res: Response) {
    const book = await this.bookService.findById(payload.bookId);
    if (!book) {
      return res.status(404).json({
        status: 'not-found',
        message: 'Book id not found',
      });
    }

    const order = await this.ordersService.create({
      ...payload,
      point: book.point,
    });

    return res.json({
      message: 'order success',
      data: order,
    });
  }
}
