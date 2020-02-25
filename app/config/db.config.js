module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Ebutor@123",
    DB: "tutorial_service_nodejs",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000, // Time in milliseconds
      idle: 10000 // Time in milliseconds
    }
};