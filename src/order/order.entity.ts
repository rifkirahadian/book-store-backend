import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Book } from 'src/book/book.entity';

@Table({
  tableName: 'orders',
})
export class Order extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @ForeignKey(() => Book)
  @Column
  bookId: number;

  @Column
  point: number;

  @Column
  status: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

  @BelongsTo(() => Book)
  book: Book[];
}
