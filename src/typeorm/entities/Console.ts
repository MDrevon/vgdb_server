import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'consoles' })
export class Console {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  shortName: string;
}
