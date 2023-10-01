import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from "passport-local"
import { EmployeeService } from "../employee/employee.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private employeeService : EmployeeService){
        super({usernameField:'email'});
    }

    async validate(email:string,password:string){
        const employee = await this.employeeService.validateUser(email,password);
        console.log("local strategy")
        if(!employee){
            throw new UnauthorizedException('User is unauthorized');
        }
        return employee;
    }

}