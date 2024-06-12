import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    EmployeeModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // Use 'mysql' for MySQL
      host: 'localhost',
      port: 5432, // Default port
      username: 'Sevasit1234',
      password: 'Al18axSjmJ0QqTG',
      database: 'EXEMPLOYYEE',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true, // Set to false in production
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
