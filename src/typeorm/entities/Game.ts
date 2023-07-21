import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'games' })
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  publisher: string;

  @Column({ nullable: true })
  developer: string;

  @Column({ nullable: true })
  releaseDate: Date;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column()
  consoleId: number;

  @Column()
  genreId: number;
}
