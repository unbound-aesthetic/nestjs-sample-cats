import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCatDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  readonly age: number;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  readonly breed: string;
}
