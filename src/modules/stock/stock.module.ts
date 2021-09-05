import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockController } from './stock.controller';
import { StockRepository } from './stock.repository';
import { StockService } from './stock.service';

@Module({
    imports: [TypeOrmModule.forFeature([StockRepository])],
    controllers: [StockController],
    exports: [StockService],
    providers: [StockService],
})
export class StockModule {}
