import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'total_venta', type: 'double' })
  totalVenta: number;

  @Column({ name: 'id_usuario', type: 'int' })
  idUsuario: number;
}
