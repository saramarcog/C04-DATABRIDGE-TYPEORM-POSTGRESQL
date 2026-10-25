import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pelicula } from './peliculas.entity';

@Injectable()
export class PeliculasService implements OnModuleInit {
  constructor(@InjectRepository(Pelicula) private readonly repository:Repository<Pelicula>){}

  async onModuleInit(){
    if(await this.repository.count()===0){
      await this.repository.save([
        this.repository.create({titulo:'Interstellar',genero:'Ciencia ficción',anio:2014,favorita:true,puntuacion:9.2}),
        this.repository.create({titulo:'Coco',genero:'Animación',anio:2017,favorita:false,puntuacion:8.8}),
      ]);
    }
  }

  // Concepto protagonista: find() recupera la colección.
  findAll():Promise<Pelicula[]>{
    return this.repository.find({order:{puntuacion:'DESC'}});
  }
}
