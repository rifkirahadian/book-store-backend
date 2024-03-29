import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BookModule } from './book/book.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [DatabaseModule, BookModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
