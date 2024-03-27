import { Injectable, Inject } from '@nestjs/common';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOKS_REPOSITORY')
    private booksRepository: typeof Book,
  ) {}

  async findAll(
    limit: number,
    offset: number,
  ): Promise<{ rows: Book[]; count: number }> {
    return this.booksRepository.findAndCountAll<Book>({ limit, offset });
  }
}
