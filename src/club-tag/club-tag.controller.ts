import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { ClubTagService } from './club-tag.service';

@UseGuards(JwtGuard)
@Controller('club-tags')
export class ClubTagController {

    constructor(private clubTagService: ClubTagService){}

    @Get()
    async getAll(){
        
    }

}
