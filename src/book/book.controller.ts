import { Controller, Get, Query, Res } from '@nestjs/common';
import { BooksService } from './book.service';
import { Response } from 'express';

@Controller('book')
export class BookController {
  constructor(private booksService: BooksService) {}

  @Get('')
  async index(
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = 8,
    @Query('search') search: string,
    @Res() res: Response,
  ) {
    const data = await this.booksService.findAll(limit, offset, search);

    return res.json(data);
  }
}
