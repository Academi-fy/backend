import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserAccountService } from '@/authentication/entities/user-account/user-account.service';

@Injectable()
export class AuthSerializer extends PassportSerializer {
  constructor(private readonly userAccountService: UserAccountService) {
    super();
  }

  serializeUser(user: any, done: (err: Error, id?: any) => void): any {
    done(null, user.id);
  }

  async deserializeUser(
    id: any,
    done: (err: Error, id?: any) => void,
  ): Promise<any> {
    const user = await this.userAccountService.getUserAccountById(id);
    done(null, user);
  }
}
