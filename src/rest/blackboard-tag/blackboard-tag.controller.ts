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

import { BlackboardTag } from '@/@generated-types';
import { CreateBlackboardTagDto, EditBlackboardTagDto } from './dto';
import { JwtGuard } from '@/auth/guard';
import { BlackboardTagService } from './services/blackboard-tag.service';

@UseGuards(JwtGuard)
@Controller('blackboard-tags')
export class BlackboardTagController {
  constructor(private blackboardTagService: BlackboardTagService) {}

  @Get()
  async getAllBlackboardTags(): Promise<BlackboardTag[]> {
    return this.blackboardTagService.getAllBlackboardTags();
  }

  @Get(':id')
  async getBlackboardTagById(
    @Param('id') blackboardTagId: string,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.getBlackboardTagById(blackboardTagId);
  }

  @Get('tag/:tag')
  async getBlackboardTagByTag(
    @Param('tag') tag: string,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.getBlackboardTagByTag(tag);
  }

  @Post()
  async createBlackboardTag(
    @Body() dto: CreateBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.createBlackboardTag(dto);
  }

  @Patch(':id')
  async updateBlackboardTagById(
    @Param('id') blackboardTagId: string,
    @Body() dto: EditBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.editBlackboardTagById(
      blackboardTagId,
      dto,
    );
  }

  @Patch('tag/:tag')
  async updateBlackboardTagByTag(
    @Param('tag') tag: string,
    @Body() dto: EditBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.editBlackboardTagByTag(tag, dto);
  }

  @Delete(':id')
  async deleteBlackboardTag(
    @Param('id') blackboardTagId: string,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.deleteBlackboardTagById(blackboardTagId);
  }

  @Delete('tag/:tag')
  async deleteBlackboardTagByTag(
    @Param('tag') tag: string,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.deleteBlackboardTagByTag(tag);
  }
}
