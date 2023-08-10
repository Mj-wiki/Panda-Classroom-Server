import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import axios from 'axios';
import { StudentService } from '../student/student.service';
import { IWxpayResult } from './dto/wxpay-result.type';
import WxPay from 'wechatpay-node-v3';
import { WECHAT_PAY_MANAGER } from 'nest-wechatpay-node-v3';

/**
 * www.sss.com/wx/wxpay
 */
@Controller('wx')
export class WxpayController {
  constructor(
    private readonly studentService: StudentService,
    @Inject(WECHAT_PAY_MANAGER) private wxPay: WxPay,
  ) {}

  @Post('wxpayResult')
  async wxpayResult(@Body() data: IWxpayResult) {
    const result = this.wxPay.decipher_gcm(
      data.resource.ciphertext,
      data.resource.associated_data,
      data.resource.nonce,
      process.env.WXPAY_APIV3KEY,
    );
  }

  // /wx/login
  @Get('login')
  async wxLogin(
    @Query('userId') userId: string,
    @Query('url') url: string,
    @Res() res,
  ): Promise<void> {
    res.redirect(`
      https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
        process.env.WXPAY_APPID
      }
      &redirect_uri=${
        process.env.WXPAY_URL
      }/wx/wxCode&response_type=code&scope=snsapi_base&state=${userId}@${encodeURIComponent(
      url,
    )}#wechat_redirect
    `);
  }

  // /wx/wxCode
  // 得到 code 然后用 code 直接去获取 openid
  @Get('wxCode')
  async wxCode(
    @Res() res,
    @Query('code') code: string,
    @Query('state') state: string,
  ) {
    const [userId, url] = state.split('@');
    const response = await axios.get(
      `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${process.env.WXPAY_APPID}
      &secret=${process.env.WXPAY_APPSECRET}&code=${code}&grant_type=authorization_code`,
    );
    const { openid } = response.data;
    await this.studentService.updateById(userId, {
      openid,
    });
    res.redirect(decodeURIComponent(url));
  }
}
