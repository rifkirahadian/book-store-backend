import { Module } from '@nestjs/common';
import { booksProviders } from './book.provider';
import { BookController } from './book.controller';
import { BooksService } from './book.service';

@Module({
  controllers: [BookController],
  providers: [...booksProviders, BooksService],
})
export class BookModule {}
