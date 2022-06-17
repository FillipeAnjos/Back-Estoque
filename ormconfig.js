console.log("DATABASE_URL: " + process.env.DATABASE_URL);
console.log("MIGRATIONS: " + process.env.MIGRATIONS);
console.log("ENTITIES: " + process.env.ENTITIES);
module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "ssl": null,
    "migrationsRun": true,
    "logging": true,
    "migrations": [process.env.MIGRATIONS],
    "entities": [process.env.ENTITIES],
    "cli": {
        "migrationsDir": "src/database/migrations",
        "entitiesDir": "src/models"
    }
}