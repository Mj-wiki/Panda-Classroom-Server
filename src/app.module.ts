import { CardModule } from './modules/card/card.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { CardRecordModule } from './modules/cardRecord/card-record.module';
import { WxorderModule } from './modules/wxorder/wxorder.module';
import { OrderModule } from './modules/order/order.module';
import { ProductModule } from './modules/product/product.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { OSSModule } from './modules/oss/oss.module';
import { AuthModule } from './modules/auth/auth.module';
import { StudentModule } from './modules/student/student.module';
import { CourseModule } from './modules/course/course.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { WxpayModule } from './modules/wxpay/wxpay.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [`${__dirname}/../modules/**/*.entity{.ts,.js}`],
      logging: true,
      synchronize: true,
      autoLoadEntities: true,
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: './schema.gql',
    }),
    UserModule,
    OSSModule,
    AuthModule,
    StudentModule,
    OrganizationModule,
    CourseModule,
    CardModule,
    ProductModule,
    TeacherModule,
    WxpayModule,
    OrderModule,
    WxorderModule,
    CardRecordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
