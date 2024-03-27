import { Injectable, Inject } from '@nestjs/common';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOKS_REPOSITORY')
    private booksRepository: typeof Book,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.booksRepository.findAll<Book>();
  }
}
