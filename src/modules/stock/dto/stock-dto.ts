
import { ApiPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { StockEntity } from '../stock.entity';

export class StockDto extends AbstractDto {
  @ApiPropertyOptional()
  isActive: boolean;

  constructor(stock: StockEntity, options?: Partial<{ isActive: boolean }>) {
    super(stock);
    this.isActive = options?.isActive;
  }
}
