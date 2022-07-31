import { ApiProperty } from '@nestjs/swagger';

export class CatEntity {
  @ApiProperty({
    example: '62e6a8672af9165cd04ca6ad',
    description: 'The id of the Cat',
  })
  _id: string;

  @ApiProperty({
    example: 'Kitty',
    description: 'The name of the Cat',
  })
  name: string;

  @ApiProperty({
    example: 1,
    description: 'The age of the Cat',
  })
  age: number;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  breed: string;
}
