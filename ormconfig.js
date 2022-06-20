console.log("DATABASE_URL: " + process.env.DATABASE_URL);
console.log("MIGRATIONS: " + process.env.MIGRATIONS);
console.log("ENTITIES: " + process.env.ENTITIES);
console.log("-------------------------------------------------------------------------------------------------------------------------------------------");

module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "ssl": null,
    "migrationsRun": false,
    "logging": false,
    "migrations": [process.env.MIGRATIONS],
    "entities": [process.env.ENTITIES],
    "cli": {
        "migrationsDir": "src/database/migrations",
        "entitiesDir": "src/models"
    }
}