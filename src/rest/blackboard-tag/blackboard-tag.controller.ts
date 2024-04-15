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

/**
 * @description The blackboard tag controller handling direct HTTP access to
 * blackboard tags.
 * */
@UseGuards(JwtGuard)
@Controller('blackboard-tags')
export class BlackboardTagController {
  constructor(private blackboardTagService: BlackboardTagService) {}

  /**
   * @description Get all blackboard tags.
   * */
  @Get()
  async getAllBlackboardTags(): Promise<BlackboardTag[]> {
    return this.blackboardTagService.getAllBlackboardTags();
  }

  /**
   * @description Get a blackboard tag by its id.
   * */
  @Get(':id')
  async getBlackboardTagById(
    @Param('id') blackboardTagId: string,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.getBlackboardTagById(blackboardTagId);
  }

  /**
   * @description Get a blackboard tag by its tag.
   * */
  @Get('tag/:tag')
  async getBlackboardTagByTag(
    @Param('tag') tag: string,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.getBlackboardTagByTag(tag);
  }

  /**
   * @description Create a new blackboard tag.
   *
   * @param dto The data to create the blackboard tag.
   * */
  @Post()
  async createBlackboardTag(
    @Body() dto: CreateBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.createBlackboardTag(dto);
  }

  /**
   * @description Edit a blackboard tag by its id.
   *
   * @param blackboardTagId The id of the blackboard tag to edit.
   * @param dto The data to edit the blackboard tag.
   * */
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

  /**
   * @description Edit a blackboard tag by its tag.
   *
   * @param tag The tag name of the blackboard tag to edit.
   * @param dto The data to edit the blackboard tag.
   * */
  @Patch('tag/:tag')
  async updateBlackboardTagByTag(
    @Param('tag') tag: string,
    @Body() dto: EditBlackboardTagDto,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.editBlackboardTagByTag(tag, dto);
  }

  /**
   * @description Delete a blackboard tag by its id.
   *
   * @param blackboardTagId The id of the blackboard tag to delete.
   * */
  @Delete(':id')
  async deleteBlackboardTag(
    @Param('id') blackboardTagId: string,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.deleteBlackboardTagById(blackboardTagId);
  }

  /**
   * @description Delete a blackboard tag by its tag.
   *
   * @param tag The tag name of the blackboard tag to delete.
   * */
  @Delete('tag/:tag')
  async deleteBlackboardTagByTag(
    @Param('tag') tag: string,
  ): Promise<BlackboardTag> {
    return this.blackboardTagService.deleteBlackboardTagByTag(tag);
  }
}
