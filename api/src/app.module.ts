import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env.${process.env.NODE_ENV}` }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: `${
        process.env.PRODUCTION === 'true' ? 'mongodb+srv' : 'mongodb'
      }://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}/${
        process.env.DATABASE
      }?retryWrites=true&w=majority`,
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
