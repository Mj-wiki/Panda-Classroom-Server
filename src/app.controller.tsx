import { Controller, Get, Res } from '@nestjs/common';
import { User } from './modules/user/models/user.entity';
import { UserService } from './modules/user/user.service';
import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';
import { HelloWorld } from './HelloWorld';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly appService: AppService,
  ) {}

  @Get('/create')
  async create(id: string): Promise<boolean> {
    return await this.userService.create({
      id,
      name: '水滴超级管理员',
      desc: '管理员',
      tel: '8800888',
    });
  }

  @Get('/del')
  async del(): Promise<boolean> {
    return await this.userService.del('0d56828d-5b72-47c3-955a-f76caf4793f2');
  }

  @Get('/update')
  async update(): Promise<boolean> {
    return await this.userService.update(
      'cb71e40d-9f15-40ef-a137-1acaa38831f4',
      {
        name: '水滴超级管理员11111',
      },
    );
  }

  @Get('/find')
  async find(id: string): Promise<User> {
    return await this.userService.find(id);
  }

  @Get('/getHello')
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Get('/html')
  async html(@Res() res) {
    const name = 'water-drop';
    const message = 'Hello World!！！！';
    const html = ReactDOMServer.renderToString(
      <HelloWorld name={name} message={message} />,
    );
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${message}</title>
        </head>
        <body>
          <div id="root">${html}</div>
        </body>
      </html>
    `);
  }
}
