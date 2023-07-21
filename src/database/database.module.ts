import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // default
      password: 'docker', // default
      database: 'vgdb', // default
      entities: [],
      synchronize: true, //Set to true to auto update the database schema on each application launch.  Set False for production.
    }),
  ],
})
export class DatabaseModule {}
