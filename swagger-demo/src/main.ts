import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Copy the following code to your projects main.ts
  const config = new DocumentBuilder()
    .setTitle('Swagger-Demo')
    .setDescription('Swagger example for DHBW lecture')
    .setVersion('1.0')
    //.addTag('math', 'methods for calculation')
    //.addTag('util', 'methods general utility')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // Up to here

  await app.listen(3000);
}
bootstrap();
