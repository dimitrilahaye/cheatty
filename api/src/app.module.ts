import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { environment } from './environment';
import { AppResolver } from './app.resolver';

const root =
  process.env.PRODUCTION || environment.server.production
    ? 'mongodb+srv'
    : 'mongodb';
const USR = process.env.DB_USER_NAME || environment.db.username;
const PWD = process.env.DB_PASSWORD || environment.db.password;
const HOST = process.env.DB_HOST || environment.db.host;
const DATABASE = process.env.DB_NAME || environment.db.database;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: environment.db.type,
      url: `${root}://${USR}:${PWD}@${HOST}/${DATABASE}?retryWrites=true&w=majority`,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppResolver],
})
export class AppModule {}
