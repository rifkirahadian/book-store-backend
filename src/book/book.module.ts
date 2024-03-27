import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from 'src/book/book.entity';

@Module({
  imports: [SequelizeModule.forFeature([Book])],
  exports: [SequelizeModule],
})
export class BookModule {}
