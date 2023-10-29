import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 35, nullable: false })
  nombre: string;

  @Column({ name: 'apellido_paterno', type: 'varchar', length: 35 })
  apellidoPaterno: string;

  @Column({ name: 'apellido_materno', type: 'varchar', length: 35 })
  apellidoMaterno: string;

  @Column({ type: 'varchar', length: 12, nullable: false })
  ci: string;

  @Column({ type: 'varchar', length: 40 })
  direccion: string;

  @Column({ type: 'bigint' })
  telefono: number;
}
