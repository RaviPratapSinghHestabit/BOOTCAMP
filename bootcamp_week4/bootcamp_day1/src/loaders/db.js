const mongoose = require("mongoose");
const logger = require("../utils/logger");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    logger.info("✔ Database connected");
  } catch (err) {
    logger.error("❌ DB connection failed", err);
    process.exit(1);
  }
};
