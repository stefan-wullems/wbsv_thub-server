import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Location extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column("float")
  latitude: number;

  @Column("float")
  longitude: number;

  @Column("text", { nullable: true })
  address: string;

  @Column("text", { nullable: true })
  postalCode: string;
}
