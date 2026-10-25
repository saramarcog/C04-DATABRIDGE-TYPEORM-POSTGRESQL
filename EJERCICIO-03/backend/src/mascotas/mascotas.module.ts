// mascotas.module.tsimport { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mascota } from './mascota.entity';
import { MascotasController } from './mascotas.controller';
import { MascotasService } from './mascotas.service';
import { Module } from '@nestjs/common/decorators/modules/index.js';

@Module({
  imports: [TypeOrmModule.forFeature([Mascota])],
  controllers: [MascotasController],
  providers: [MascotasService],
})
export class MascotasModule {}
