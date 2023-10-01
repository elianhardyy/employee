import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import { EmployeeDto } from '../dto/employee.dto';
@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee) private employeeRepo : Repository<Employee>,
        private jwtService:JwtService
        ){}

    create(employee:Employee){
        const newEmployee = this.employeeRepo.create(employee);
        return this.employeeRepo.save(newEmployee);
    }
    
    async validateUser(email:string, password:string){
        const employee = await this.employeeRepo.findOne({where:{email}});
        const passwordcheck = await bcrypt.compare(password,employee.password);
        if(employee && passwordcheck){
            const {password , ...result} = employee;
            // console.log(result);
            console.log("validate user");
            return result;
        }
        return null;
    }

    //LocalAuthGuard
    async login(employee:EmployeeDto,res:any){
        const payload = {
            email:employee.email,
            id:employee.id,
            name:employee.name
        }
        const token = this.jwtService.sign(payload);
        res.cookie('jwt',token,{httpOnly:true});
        console.log("jwt token = "+token);
        return res.json({jwt:token});
    }

    //JwtAuthGuard
    async dashboard(req:any){
        const employee = await this.employeeRepo.findOne({
            where:{email:req.user.email}
        });
        return employee;
    }

    async update(id:number,name:string,phone:string,email:string){
        const employeeId = await this.employeeRepo.findOne({
            where:{id:id}
        });
        employeeId.name = name;
        employeeId.phone = phone;
        employeeId.email = email
        const edit = this.employeeRepo.save(employeeId);
        return edit;
    }

    async findAll():Promise<Employee[]>{
        return this.employeeRepo.find();
    }

    async delete(id:number){
        const findEmployee = await this.employeeRepo.findOne({
            where:{id}
        });
        this.employeeRepo.remove(findEmployee);
        return { msg : 'Success delete' }
    }
}
