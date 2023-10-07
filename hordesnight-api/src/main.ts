import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    { 
      origin: ["http://localhost:5000", "http://localhost:5100", "http://localhost:3001", "http://localhost:3002"],
      credentials: true,
      allowedHeaders: 'Content-Type, Accept, Origin',
      preflightContinue: false,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }
  );
  await app.listen(3000);
}
bootstrap();

