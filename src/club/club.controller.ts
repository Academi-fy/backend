import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClubService } from './club.service';
import { CreateClubDto } from './dto/create-club.dto';
import { dot } from 'node:test/reporters';
import { EditClubDto } from './dto/edit-club.dto';
import { Club } from '@prisma/client';

@Controller('clubs')
export class ClubController {
  constructor(private clubService: ClubService) {}

  @Get()
  getAll(): Promise<Club[]> {
    return this.clubService.getAllClubs();
  }

  @Get(':id')
  getById(@Param('id') clubId: string): Promise<Club> {
    return this.clubService.getClubById(clubId);
  }

  @Post()
  createClub(@Body() dto: CreateClubDto): Promise<Club> {
    return this.clubService.createClub(dto);
  }

  @Patch(':id')
  updateClub(
    @Param('id') clubId: string,
    @Body() dto: EditClubDto,
  ): Promise<Club> {
    return this.clubService.editClub(clubId, dto);
  }

  @Delete(':id')
  deleteClub(@Param() clubId: string): Promise<boolean> {
    return this.clubService.deleteClub(clubId);
  }
}
