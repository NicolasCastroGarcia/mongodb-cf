// Nest
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

//App
import { AppController } from './app.controller';
import { AppService } from './app.service';

//Modules
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    // nombre_base lo pueden reemplazar por el nombre que ustedes quieran. Intenten que sea representativo de la aplicación que están desarrollando.
    MongooseModule.forRoot('mongodb://localhost:27017/nombre_base'),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
