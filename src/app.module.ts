import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { ConsolesController } from './src/consoles/controllers/consoles/consoles.controller';
import { ConsolesController } from './consoles/controllers/consoles/consoles.controller';
import { ConsolesService } from './consoles/services/consoles/consoles.service';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // default
      password: 'docker', // default
      database: 'vgdb', // default
      entities: [User],
      synchronize: true, //Set to true to auto update the database schema on each application launch.  Set False for production.
    }),
  ],
  controllers: [AppController, ConsolesController],
  providers: [AppService, ConsolesService],
})
export class AppModule {}
