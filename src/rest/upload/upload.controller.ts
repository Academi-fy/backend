import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('upload')
export class UploadController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        filename: (req, file, cb) => {
          const date = new Date();
          const formattedDate = UploadController.formatDate(date);
          const extension = extname(file.originalname);
          cb(null, `${formattedDate}${extension}`);
        },
      }),
    }),
  ) //TODO cap file size
  @HttpCode(HttpStatus.OK)
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    const fileUrl = `/public/${file.filename}`;
    return {
      message: 'File has been uploaded successfully',
      relativePath: fileUrl,
    };
  }

  /* TODO:
  @Post('delete')
  deleteFile() {
  }*/

  static formatDate(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${date.getMilliseconds()}`;
  }
}
