import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { ClubTagService } from './club-tag.service';
import { ClubTag } from '@prisma/client';
import { CreateClubTagDto, EditClubTagDto } from './dto';

@UseGuards(JwtGuard)
@Controller('club-tags')
export class ClubTagController {
  constructor(private clubTagService: ClubTagService) {}

  @Get()
  async getAll(): Promise<ClubTag[]> {
    return this.clubTagService.getAllClubTags();
  }

  @Get(':id')
  async getById(@Param('id') clubTagId: string): Promise<ClubTag> {
    return this.clubTagService.getClubTagById(clubTagId);
  }

  @Post()
  async createClubTag(@Body() dto: CreateClubTagDto): Promise<ClubTag> {
    return this.clubTagService.createClubTag(dto);
  }

  @Patch(':id')
  async updateClubTag(
    @Param('id') clubTagId: string,
    @Body() dto: EditClubTagDto,
  ): Promise<ClubTag> {
    return this.clubTagService.editClubTag(clubTagId, dto);
  }

  @Delete(':id')
  async deleteClubTag(@Param('id') clubTagId: string): Promise<boolean> {
    return this.clubTagService.deleteClubTag(clubTagId);
  }
}
