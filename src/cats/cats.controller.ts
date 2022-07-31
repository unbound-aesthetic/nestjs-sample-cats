import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';
import { CatEntity } from './entities/cat.entity';
import { UpdateCatDto } from './dto/update-cat.dto';

@ApiBearerAuth()
@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({ status: 201 })
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all cat' })
  @ApiResponse({ status: 200, type: [CatEntity] })
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find cat by id' })
  @ApiResponse({ status: 200, type: CatEntity })
  async findOne(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update cat by id' })
  @ApiResponse({ status: 200, type: CatEntity })
  async update(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ): Promise<Cat> {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete cat by id' })
  @ApiResponse({ status: 200, type: CatEntity })
  async delete(@Param('id') id: string) {
    return this.catsService.delete(id);
  }
}
