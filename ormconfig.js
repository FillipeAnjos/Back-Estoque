module.exports = {
    "type": "postgres",
    "host": process.env.LOCAL_HOST,
    "port": process.env.LOCAL_PORT,
    "username": process.env.LOCAL_USERNAME,
    "password": process.env.LOCAL_PASSWORD,
    "database": process.env.LOCAL_DATABASE,
    "migrations": ["./src/database/migrations/*.ts"],
    "entities": ["src/models/*.ts"],
    "cli": {
        "migrationsDir": "src/database/migrations",
        "entitiesDir": "src/models"
    }
}