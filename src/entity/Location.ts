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
  streetName: string;

  @Column("text", { nullable: true })
  city: string;

  @Column("text", { nullable: true })
  country: string;

  @Column("text", { nullable: true })
  houseNumber: string;

  @Column("text", { nullable: true })
  postalCode: string;
}
