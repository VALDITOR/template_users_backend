import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./models/Users"
import { CreateOccupationTable1698047188512 } from "./migration/1698047188512-create-occupation-table"
import { CreateUserOccupationTable1698049232108 } from "./migration/1698049232108-create-user_occupation-table"
import { CreateUsersTable1698051932911 } from "./migration/1698051932911-create-users-table"
export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "1234",
 database: "fsd",
 entities: [Users],
 migrations: [CreateUsersTable1698051932911, CreateOccupationTable1698047188512, CreateUserOccupationTable1698049232108],
 synchronize: false,
 logging: false,
})