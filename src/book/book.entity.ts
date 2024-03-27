import { Table, Column, Model } from 'sequelize-typescript';

@Table
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
