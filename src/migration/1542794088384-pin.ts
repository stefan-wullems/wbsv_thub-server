import {
  MigrationInterface,
  QueryRunner,
  getRepository,
  createQueryBuilder,
  getConnection
} from "typeorm";
import User from "../entity/User";
import Pin from "../entity/Pin";
import Location from "../entity/Location";
import { createConnection } from "net";

export class pin1542794088384 implements MigrationInterface {
  ids = {
    userIds: [],
    pinIds: [],
    locationIds: []
  };

  public async up(queryRunner: QueryRunner): Promise<any> {
    const userIds = await getRepository(User)
      .createQueryBuilder("user")
      .select("user.id")
      .getMany();

    const pins = userIds.map(() => ({}));

    const pinIds = (await createQueryBuilder()
      .insert()
      .into(Pin)
      .values(pins)
      .execute()).identifiers;

    const locations = userIds.map(() => {
      return {
        latitude: randomLat(),
        longitude: randomLng()
      };
    });

    const locationIds = (await createQueryBuilder()
      .insert()
      .into(Location)
      .values(locations)
      .execute()).identifiers;

    const connection = await getConnection();
    userIds.forEach(async (userId, i) => {
      connection
        .createQueryBuilder()
        .relation(Pin, "user")
        .of(pinIds[i])
        .set(userId);

      connection
        .createQueryBuilder()
        .relation(Pin, "location")
        .of(pinIds[i])
        .set(locationIds[i]);
    });

    this.ids = { userIds, pinIds, locationIds };
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const { pinIds, locationIds } = this.ids;
    const connection = await getConnection();

    await connection
      .createQueryBuilder()
      .delete()
      .from(Pin)
      .where(pinIds.map(id => "id = :id").join(" OR "))
      .execute();
    await connection
      .createQueryBuilder()
      .delete()
      .from(Location)
      .where(locationIds.map(id => "id = :id").join(" OR "))
      .execute();
  }
}

function randomLat() {
  return Math.random() > 0.5
    ? Math.floor(Math.random() * 91)
    : Math.floor(Math.random() * 91) * -1;
}

function randomLng() {
  return Math.random() > 0.5
    ? Math.floor(Math.random() * 181)
    : Math.floor(Math.random() * 181) * -1;
}
