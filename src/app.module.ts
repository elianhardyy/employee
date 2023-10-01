import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee/employee';

@Module({
  imports: [EmployeeModule,TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    database:'employee',
    entities:[Employee],
    synchronize:true
  }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
