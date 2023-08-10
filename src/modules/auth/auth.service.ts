import { Injectable } from '@nestjs/common';
import * as Dysmsapi from '@alicloud/dysmsapi20170525';
import Util, * as utils from '@alicloud/tea-util';
import { getRandomCode } from 'src/shared/utils';
import { SIGN_NAME, TEMPLATE_CODE } from 'src/common/constants/aliyun';
import { UserService } from './../user/user.service';
import { msgClient } from 'src/shared/utils/msg';
import * as dayjs from 'dayjs';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  // 发送短信验证码
  async sendCodeMsg(tel: string): Promise<boolean> {
    const user = await this.userService.findByTel(tel);
    if (user) {
      const diffTime = dayjs().diff(dayjs(user.codeCreateTimeAt));
      if (diffTime < 60 * 1000) {
        return false;
      }
    }
    const code = getRandomCode();
    const sendSmsRequest = new Dysmsapi.SendSmsRequest({
      signName: SIGN_NAME,
      templateCode: TEMPLATE_CODE,
      phoneNumbers: tel,
      templateParam: `{\"code\":\"${code}\"}`,
    });
    const runtime = new utils.RuntimeOptions({});
    try {
      await msgClient.sendSmsWithOptions(sendSmsRequest, runtime);
      if (user) {
        const result = await this.userService.updateCode(user.id, code);
        if (result) {
          return true;
        }
        return false;
      }
      const result = await this.userService.create({
        tel,
        code,
        codeCreateTimeAt: new Date(),
      });
      if (result) {
        return true;
      }
      return false;
    } catch (error) {
      // 如有需要，请打印 error
      Util.assertAsString(error.message);
    }
  }
}
