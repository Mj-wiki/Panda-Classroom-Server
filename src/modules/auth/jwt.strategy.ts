import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // secretOrKey: process.env.JWT_SECRET,
      secretOrKey: 'majian1234',
    });
  }
  async validate(user): Promise<any> {
    if (!user.id) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
