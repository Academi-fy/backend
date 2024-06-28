import {
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { unlink } from 'fs';
import response_codes from '@/response-codes.json';
import { Response } from '@/response.entity';

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
  uploadFile(@UploadedFile() file: Express.Multer.File): Response {
    const fileUrl = `/public/${file.filename}`;
    return new Response(false, response_codes.special.upload.upload.success, {
      relativePath: fileUrl,
    });
  }

  @Post('delete/:filename')
  @HttpCode(HttpStatus.OK)
  deleteFile(@Param('filename') filename: string): Response {
    const filePath = join(__dirname, '..', '..', 'public', filename);
    unlink(filePath, (err) => {
      if (err) {
        return new Response(true, response_codes.special.upload.delete.failed, {
          error: err,
        });
      }
    });
    return new Response(false, response_codes.special.upload.delete.success);
  }

  static formatDate(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${date.getMilliseconds()}`;
  }
}
