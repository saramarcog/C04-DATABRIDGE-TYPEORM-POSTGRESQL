import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('peliculas')
export class Pelicula {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  genero: string;

  @Column()
  anio: number;

  @Column({ type: 'boolean', default: false })
  favorita: boolean;

  @Column('decimal', { precision: 3, scale: 1 })
  puntuacion: number;
}