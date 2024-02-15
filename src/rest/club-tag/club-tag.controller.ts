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
import { ClubTag } from '@/@generated-types';

import { CreateClubTagDto, EditClubTagDto } from './dto';
import { JwtGuard } from 'src/auth/guard';
import { ClubTagService } from './club-tag.service';

@UseGuards(JwtGuard)
@Controller('club-tags')
export class ClubTagController {
  constructor(private clubTagService: ClubTagService) {}

  @Get()
  async getAllClubTags(): Promise<ClubTag[]> {
    return this.clubTagService.getAllClubTags();
  }

  @Get(':id')
  async getClubTagById(@Param('id') clubTagId: string): Promise<ClubTag> {
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
  async deleteClubTag(@Param('id') clubTagId: string): Promise<ClubTag> {
    return this.clubTagService.deleteClubTag(clubTagId);
  }
}
