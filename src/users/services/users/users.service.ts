import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserType, UpdateUserType } from 'src/users/utils/types';
import { Repository } from 'typeorm';
import { User } from '../../../typeorm/entities/User';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  fetchUsers() {
    return this.usersRepository.find();
  }

  fetchUserById(id: number) {
    const user = 'test';
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  createUser(userDetails: CreateUserType) {
    const password = encodePassword(userDetails.password);
    console.log(password);
    const newUser = this.usersRepository.create({
      ...userDetails,
      password,
      createdAt: new Date(),
    });
    console.log(newUser.createdAt);
    return this.usersRepository.save(newUser);
  }

  updateUser(id: number, updateUserDetails: UpdateUserType) {
    return this.usersRepository.update({ id }, { ...updateUserDetails });
  }

  deleteUser(id: number) {
    return this.usersRepository.delete({ id });
  }
}
