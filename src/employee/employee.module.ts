import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalAuthGuard } from '../guard/local-auth.guard';
import { LocalStrategy } from '../guard/local.strategy';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { JwtStrategy } from '../guard/jwt.strategy';
import { SessionSerializer } from '../guard/session.serializer';

@Module({
  imports:[
    TypeOrmModule.forFeature([Employee]),
    PassportModule.register({session:true}),
    JwtModule.register({
      secret:'SECRET',
    }),
  ],
  providers: [
    EmployeeService,
    LocalAuthGuard,
    LocalStrategy,
    JwtAuthGuard,
    JwtStrategy,
    SessionSerializer
  ],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
