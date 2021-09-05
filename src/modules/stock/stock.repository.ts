import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { StockEntity } from './stock.entity';

@EntityRepository(StockEntity)
export class StockRepository extends Repository<StockEntity> {}
