import { Body, Controller, Delete, Get, Param, Post, Put, Request, Response, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from '../dto/employee.dto';

import { LocalAuthGuard } from '../guard/local-auth.guard';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { Employee } from './employee';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService : EmployeeService){}

    @Post('add')
    public add(@Body() employee : EmployeeDto){
        return this.employeeService.create(employee);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    public login(@Request() req,@Response() res):any{
        return this.employeeService.login(req.user,res);
    }

    @UseGuards(JwtAuthGuard)
    @Get('home')
    public dashboard(@Request() req):any{
        return this.employeeService.dashboard(req);
    }

    @Get('all')
    public all():Promise<Employee[]>{
        return this.employeeService.findAll();
    }

    @Put('employee/:id')
    public update(
        @Param('id') id:number,
        @Body('name') name:string,
        @Body('phone') phone:string,
        @Body('email') email:string
    ){
        return this.employeeService.update(id,name,phone,email);
    }

    @Delete('employee/:id')
    public delete(@Param('id') id:number){
        return this.employeeService.delete(id);
    }
}
