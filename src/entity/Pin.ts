import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  Column
} from "typeorm";
import User from "./User";
import Location from "./Location";

@Entity()
export default class Pin extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;

  @Column("boolean", { default: false })
  approved: boolean;

  @ManyToOne(() => User, user => user.postedPins)
  user: User;
}
