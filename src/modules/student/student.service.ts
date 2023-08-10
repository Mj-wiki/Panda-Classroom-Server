import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Student } from './models/student.entity';
@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async findByAccount(account: string): Promise<Student> {
    return this.studentRepository.findOne({
      where: {
        account,
      },
    });
  }

  async create(entity: DeepPartial<Student>): Promise<boolean> {
    const res = await this.studentRepository.insert(entity);
    if (res && res.raw.affectedRows > 0) {
      return true;
    }
    return false;
  }
}
