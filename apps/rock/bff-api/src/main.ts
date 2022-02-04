import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.ROCK_BFF_API_PORT || process.env.PORT || 3000;

console.log('banana');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
