import { CommonEntity } from '@/common/entities/common.entity';
import { Organization } from '@/modules/organization/models/organization.entity';
import { Product } from '@/modules/product/models/product.entity';
import { Student } from '@/modules/student/models/student.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

/**
 * 商品订单实体
 */
@Entity('order')
export class Order extends CommonEntity {
  @Column({
    comment: '订单号',
    default: '',
  })
  outTradeNo: string;

  @Column({
    comment: '手机号',
    nullable: true,
  })
  tel: string;

  @Column({
    comment: '数量',
    nullable: true,
  })
  quantity: number;

  @Column({
    comment: '总金额',
  })
  amount: number;

  @Column({
    comment: '支付状态',
  })
  status: string;

  @ManyToOne(() => Organization, {
    cascade: true,
  })
  org: Organization;

  @ManyToOne(() => Product, {
    cascade: true,
  })
  product: Product;

  @ManyToOne(() => Student, {
    cascade: true,
  })
  student: Student;
}
