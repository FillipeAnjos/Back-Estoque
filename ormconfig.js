console.log("DATABASE_URL: " + process.env.DATABASE_URL);
module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "ssl": { rejectUnauthorized: false },
    "migrations": ["./src/database/migrations/*.js"],
    "entities": ["src/models/*.js"],
    "cli": {
        "migrationsDir": "src/database/migrations",
        "entitiesDir": "src/models"
    }
}