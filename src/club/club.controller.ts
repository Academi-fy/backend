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
import { ClubService } from './club.service';
import { CreateClubDto } from './dto';
import { EditClubDto } from './dto';
import { Club } from '@prisma/client';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('clubs')
export class ClubController {
  constructor(private clubService: ClubService) {}

  @Get()
  async getAll(): Promise<Club[]> {
    return this.clubService.getAllClubs();
  }

  @Get(':id')
  async getById(@Param('id') clubId: string): Promise<Club> {
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
  async deleteClub(@Param() clubId: string): Promise<boolean> {
    return this.clubService.deleteClub(clubId);
  }
}
