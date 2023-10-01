import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as session from 'express-session';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.use(session({
    secret: 'K4M5P7Q8RATBUCWEXFYH2J3K5N6P7R9SATCVDWEYGZH2J4M5N6Q8R9SBUC',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 },
  }));
  app.use(passport.session());
  await app.listen(4000);
}
bootstrap();
