import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { StockDto } from './dto/stock-dto';

@Entity({ name: 'stocks' })
export class StockEntity extends AbstractEntity<StockDto> {
    @Column({ nullable: true })
    firstName: string;

    dtoClass = StockDto;
}
