import {
  Controller,
  HttpStatus,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller('upload')
export class UploadController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    const fileUrl = `/public/${file.filename}`;
    return res.status(HttpStatus.OK).json({
      message: 'File has been uploaded successfully',
      relativePath: fileUrl,
    });
  }
}
