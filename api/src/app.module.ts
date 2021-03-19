import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { environment } from './environment';
import { AppResolver } from './app.resolver';

const HOST = process.env.DB_HOST || environment.db.host;
const DATABASE = process.env.DB_NAME || environment.db.database;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: environment.db.type,
      url: `mongodb://${HOST}/${DATABASE}`,
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
