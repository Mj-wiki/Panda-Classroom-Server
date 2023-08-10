import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Module, ConsoleLogger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserService } from './../user/user.service';
import { User } from '../user/models/user.entity';
import { JWT_SECRET } from '@/common/constants/aliyun';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: {
        expiresIn: '60s',
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    JwtStrategy,
    ConsoleLogger,
    AuthService,
    AuthResolver,
    UserService,
  ],
  exports: [],
})
export class AuthModule {}
