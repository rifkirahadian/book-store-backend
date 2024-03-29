import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
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

  @Get('')
  async index(
    @Query('email') email: string,
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = 8,
    @Res() res: Response,
  ) {
    const orders = await this.ordersService.findAllByEmail(
      email,
      limit,
      offset,
    );
    return res.json(orders);
  }

  @Put(':id/cancel')
  async cancel(@Param('id') id: number, @Res() res: Response) {
    const order = await this.ordersService.findById(id);
    if (!order) {
      return res.status(404).json({
        status: 'not-found',
        message: 'Order id not found',
      });
    }

    if (order.status === 'cancelled') {
      return res.status(400).json({
        status: 'bad-request',
        message: 'The order has been canceled before',
      });
    }

    await this.ordersService.cancelOrder(order);

    return res.json({
      message: 'Order cancelled',
    });
  }
}
