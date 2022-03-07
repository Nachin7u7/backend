import { Module } from '@nestjs/common';
import { NewsService } from './services/news.service';
import { NewsController } from './controllers/news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from 'src/model/News';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      News
    ])
  ],
  providers: [NewsService],
  controllers: [NewsController]
})
export class NewsModule {}


