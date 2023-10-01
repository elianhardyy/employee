import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from "bcrypt";
@Entity('employees2')
export class Employee {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    phone:string

    @Column({unique:true})
    email:string

    @Column()
    password:string

    @Column()
    @CreateDateColumn()
    created_at:Date;

    @Column()
    @UpdateDateColumn()
    updated_at:Date;

    @BeforeInsert()
    async hashPassword(password:string){
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password,salt);
    }
}