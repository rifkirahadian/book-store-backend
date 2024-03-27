import { Book } from './book.entity';

export const booksProviders = [
  {
    provide: 'BOOKS_REPOSITORY',
    useValue: Book,
  },
];
