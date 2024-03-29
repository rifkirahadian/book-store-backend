import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'orders',
})
export class Order extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  bookId: number;

  @Column
  point: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
