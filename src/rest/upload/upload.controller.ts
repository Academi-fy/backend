import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file')) //TODO cap file size
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
  deleteFile(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
  }*/
}
