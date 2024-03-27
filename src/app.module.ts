import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { Database } from './database/database';
import { DatabaseModule } from './database/database.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [DatabaseModule, BookModule],
  controllers: [AppController, BookController],
  providers: [AppService, Database],
})
export class AppModule {}
