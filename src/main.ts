import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import rateLimit from 'express-rate-limit';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'public/views'));
  app.setViewEngine('hbs');

  app.use(
    rateLimit({
      windowMs: 1 * 60 * 1000,
      limit: 40,
    }),
  );

  await app.listen(3000);
}
bootstrap();
