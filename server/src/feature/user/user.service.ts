import { LoginDto, UserInfoDto } from './dto/user.dto';

import { BaseService } from 'shared/base';
import { IUser } from './interface/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import utility from 'utility';

@Injectable()
export class UserService extends BaseService<IUser> {
  constructor(@InjectModel('User') private readonly model: Model<IUser>) {
    super(model);
  }

  public async search(keyword: string) {
    const query = {} as any;
    if (keyword) {
      const keywordReg = new RegExp(keyword, 'i');
      query.$or = [
        { email: keywordReg },
        { nick: keywordReg },
        { phone: keywordReg },
      ];
    }

    return await super.findAll(query);
  }

  public async create(data: UserInfoDto) {
    const { email, password } = data;
    const exist = await super.findOne({ email });
    if (exist) {
      throw new Error('该email已注册');
    }

    const user = await super.create({
      ...data,
      password: utility.sha256(password),
    });
    return await user.save();
  }

  public async login(data: LoginDto) {
    const { email, password } = data;
    const exist = await super.findOne({ email });
    if (!exist) {
      throw new Error('该email未注册');
    }
    if (exist.password !== utility.sha256(password)) {
      throw new Error('密码错误');
    }
    // TODO: set cookie

    return exist;
  }
}
