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
import { JwtGuard } from '../auth/guard';
import { BlackboardTagService } from './blackboard-tag.service';
import { BlackboardTag } from '@prisma/client';
import { CreateBlackboardTagDto, EditBlackboardTagDto } from './dto';

@UseGuards(JwtGuard)
@Controller('blackboard-tags')
export class BlackboardTagController {
  constructor(private blackboardTagService: BlackboardTagService) {}

  @Get()
  async getAll(): Promise<BlackboardTag[]> {
    return this.blackboardTagService.getAllBlackboardTags();
  }

  @Get(':id')
  async getById(@Param('id') blackboardTagId: string): Promise<BlackboardTag> {
    return this.blackboardTagService.getBlackboardTagById(blackboardTagId);
  }

  @Get('tag/:tag')
  async getByTag(@Param('tag') tag: string): Promise<BlackboardTag> {
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
  ): Promise<boolean> {
    return this.blackboardTagService.deleteBlackboardTag(blackboardTagId);
  }
}
