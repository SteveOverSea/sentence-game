import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Story } from 'src/entities/public/story.interface';
import { DeleteResult, UpdateResult } from 'typeorm';
import { StoryService } from './story.service';
import { Response, Request } from 'express';
import { randomUUID } from 'crypto';

@Controller('story')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Get()
  getAll(): Observable<Story[]> {
    return this.storyService.getAll();
  }

  @Get('unlocked')
  getFirstUnlocked(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ): Observable<Story> {
    console.log('get story', request.cookies);
    if (!request.cookies.userId) {
      response.cookie('userId', randomUUID());
    }

    return this.storyService.getFirstUnlockedAndLock();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Observable<Story> {
    return this.storyService.getOne(id);
  }

  @Post()
  create(@Body() story: Story): Observable<Story> {
    return this.storyService.create(story);
  }

  @Put(':id/unlock')
  unlock(@Param('id') id: number): Observable<UpdateResult> {
    return this.storyService.update(id, { isLocked: false });
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() story: Story,
  ): Observable<UpdateResult> {
    return this.storyService.update(id, story);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.storyService.delete(id);
  }
}
