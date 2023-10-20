import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users1697789976291 } from "./migration/1697789976291-users"
export const AppDataSource = new DataSource({
 type: "mysql",
 host: "localhost",
 port: 3306,
 username: "root",
 password: "1234",
 database: "fsd",
 entities: [],
 migrations: [Users1697789976291],
 synchronize: false,
 logging: false,
})