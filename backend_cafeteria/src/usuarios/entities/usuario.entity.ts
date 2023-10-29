import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20 })
  usuario: string;

  @Column({ type: 'varchar', length: 30 })
  contraseña: string;

  @Column({name: 'id_cliente', type: 'int'})
  idCliente: number;
}
