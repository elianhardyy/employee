import { INestApplication,  } from "@nestjs/common"
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest"
import { EmployeeModule } from "../src/employee/employee.module";
import * as passport from 'passport';
import * as session from 'express-session';
import { AppModule } from "../src/app.module";
import { ValidationPipe } from '@nestjs/common';
describe('Employee Controller end-to-end',()=>{
    let app:INestApplication;
    
    beforeAll(async()=>{
        const moduleFixture:TestingModule = await Test.createTestingModule({
            imports:[AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        app.setGlobalPrefix('api');
        app.use(session({
            secret: 'K4M5P7Q8RATBUCWEXFYH2J3K5N6P7R9SATCVDWEYGZH2J4M5N6Q8R9SBUC',
            resave: true,
            saveUninitialized: true,
            cookie: { maxAge: 3600000 },
          }));
        app.use(passport.session());
        await app.init();

    });

    it('post data',()=>{
        return request(app.getHttpServer())
            .post('/api/employee/add')
            .send({
                name:"ewang",
                phone:"02910291",
                email:"papa@mail.com",
                password:"12345678"
            }).expect(201)
    })
    it('login employee',()=>{
        return request(app.getHttpServer())
            .post('/api/employee/login')
            .send({
                email:"irvan@mail.com",
                password:"12345678"
            }).expect(201)
    })
})