import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users1697789976291 } from "./migration/1697789976291-users"
import { Users } from "./models/Users"
import { CreateOccupationTable1698047188512 } from "./migration/1698047188512-create-occupation-table"
import { CreateUserOccupationTable1698049232108 } from "./migration/1698049232108-create-user_occupation-table"
export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "1234",
 database: "fsd",
 entities: [Users],
 migrations: [Users1697789976291, CreateOccupationTable1698047188512, CreateUserOccupationTable1698049232108],
 synchronize: false,
 logging: false,
})