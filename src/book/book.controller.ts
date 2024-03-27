import { Controller, Get, Res } from '@nestjs/common';
import { BooksService } from './book.service';
import { Response } from 'express';

@Controller('book')
export class BookController {
  constructor(private booksService: BooksService) {}

  @Get('')
  async index(@Res() res: Response) {
    const data = await this.booksService.findAll();

    return res.json(data);
  }
}
