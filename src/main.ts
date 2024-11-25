import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { RedisIoAdapter } from './redis-io-adapter.class';

console.log('I AM USE REDIS_URL - ' + process.env.REDIS_URL);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useWebSocketAdapter(new RedisIoAdapter(app));

  await app.listen(process.env.PORT ?? 3223);
}
bootstrap();
