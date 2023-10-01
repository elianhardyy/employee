import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Employee } from "../employee/employee";

export class EmployeeDto extends Employee{
    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    phone:string

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;


}