import { Controller, Get, Query, Res } from '@nestjs/common';
import { BooksService } from './book.service';
import { Response } from 'express';
import { ApiQuery } from '@nestjs/swagger';

@Controller('book')
export class BookController {
  constructor(private booksService: BooksService) {}

  @Get('')
  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async index(
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = 8,
    @Res() res: Response,
  ) {
    const data = await this.booksService.findAll(limit, offset);

    return res.json(data);
  }
}
