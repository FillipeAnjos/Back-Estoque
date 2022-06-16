console.log("DATABASE_URL: " + process.env.DATABASE_URL);
module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "ssl": { rejectUnauthorized: false },
    "migrations": [process.env.MIGRATIONS],
    "entities": [process.env.ENTITIES],
    "cli": {
        "migrationsDir": "src/database/migrations",
        "entitiesDir": "src/models"
    }
}