import { Injectable, Inject } from '@nestjs/common';
import { Book } from './book.entity';
import { Op } from 'sequelize';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOKS_REPOSITORY')
    private booksRepository: typeof Book,
  ) {}

  async findAll(
    limit: number,
    offset: number,
    search: string,
  ): Promise<{ rows: Book[]; count: number }> {
    const where = search
      ? {
          title: {
            [Op.iLike]: `%${search}%`,
          },
        }
      : {};
    return this.booksRepository.findAndCountAll<Book>({ limit, offset, where });
  }

  async findById(id: number): Promise<Book> {
    return this.booksRepository.findByPk(id);
  }
}
