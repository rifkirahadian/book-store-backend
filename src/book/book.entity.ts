import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'books',
  timestamps: false,
})
export class Book extends Model {
  @Column
  title: string;

  @Column
  writer: string;

  @Column
  cover_image: string;

  @Column
  point: number;

  @Column
  tag: string;
}
