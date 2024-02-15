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
import { Club } from '../../@generated-types';

import { CreateClubDto, EditClubDto } from './dto';
import { JwtGuard } from 'src/auth/guard';
import { ClubService } from './club.service';

@UseGuards(JwtGuard)
@Controller('clubs')
export class ClubController {
  constructor(private clubService: ClubService) {}

  @Get()
  async getAllClubs(): Promise<Club[]> {
    return this.clubService.getAllClubs();
  }

  @Get(':id')
  async getClubById(@Param('id') clubId: string): Promise<Club> {
    return this.clubService.getClubById(clubId);
  }

  @Post()
  async createClub(@Body() dto: CreateClubDto): Promise<Club> {
    return this.clubService.createClub(dto);
  }

  @Patch(':id')
  async updateClub(
    @Param('id') clubId: string,
    @Body() dto: EditClubDto,
  ): Promise<Club> {
    return this.clubService.editClub(clubId, dto);
  }

  @Delete(':id')
  async deleteClub(@Param('id') clubId: string): Promise<Club> {
    return this.clubService.deleteClub(clubId);
  }
}
