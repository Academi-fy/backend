import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LocalAuthGuard } from '@/authentication/guard/local-auth.guard';
import { SignupDto } from '@/authentication/dto/signup.dto';
import { RefreshToken, UserAccount } from '@/@generated-types';
import { UserAccountService } from '@/authentication/entities/user-account/user-account.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userAccountService: UserAccountService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any, @Res({ passthrough: true }) res: Response) {
    const credentials: { username: string; password: string } = req.body;
    const userAccount: UserAccount =
      await this.userAccountService.getUserAccountByUsername(
        credentials.username,
      );

    const jwt: string = this.authService.generateJwtToken(credentials);

    const currentDate: Date = new Date();
    const expirationDate: Date = new Date();
    expirationDate.setDate(currentDate.getDate() + 30);
    const refreshToken: RefreshToken =
      await this.authService.generateRefreshToken(
        userAccount.id,
        expirationDate,
      );

    // Set HTTP Only cookies
    res.cookie('jwt', jwt, { httpOnly: true, secure: true });
    res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true });

    // Set non-HTTP only cookie for CSRF token
    const csrfToken: string = this.authService.generateCsrfToken();
    res.cookie('csrfToken', csrfToken, { secure: true });

    // Save the refresh token in the user record (needs implementation in UserService)
    await this.authService.updateRefreshToken(
      credentials.username,
      refreshToken,
    );

    return { message: 'Login successful' };
  }

  @Post('signup')
  async signup(@Body() body: SignupDto): Promise<UserAccount> {
    return await this.authService.signup(body.username, body.password);
  }

  @UseGuards(LocalAuthGuard)
  @Get('protected')
  async protected() {
    return { message: 'You have access to this protected route' };
  }
}
