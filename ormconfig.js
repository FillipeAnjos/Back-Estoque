console.log("DATABASE_URL: " + process.env.DATABASE_URL);
console.log("MIGRATIONS: " + process.env.MIGRATIONS);
console.log("ENTITIES: " + process.env.ENTITIES);
console.log("MIGRATIONS_RUN: " + process.env.MIGRATIONS_RUN);
console.log("LOGGING: " + process.env.LOGGING);
console.log("-------------------------------------------------------------------------------------------------------------------------------------------");

module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "ssl": { rejectUnauthorized: false },
    "migrationsRun": true,
    "logging": true,
    "migrations": [process.env.MIGRATIONS],
    "entities": [process.env.ENTITIES],
    "cli": {
        "migrationsDir": "src/database/migrations",
        "entitiesDir": "src/models"
    }
}