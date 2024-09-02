import { Module } from '@nestjs/common';
import { DatabaseModule } from '@libs/common/database/database.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserProviders } from './user.providers';
// import { FeishuController } from './feishu/feishu.controller';
// import { FeishuService } from './feishu/feishu.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
  exports: [UserService],
})
export class UserModule {}
