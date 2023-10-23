import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserOccupationTable1698049232108 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user_occupation",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "user_id",
                        type: "int"
                    },
                    {
                        name: "occupation_id",
                        type: "int"
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                    {
                        columnNames: ["occupation_id"],
                        referencedTableName: "occupation",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    }
                ],
            }),
            true
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_occupation");
    }

}
