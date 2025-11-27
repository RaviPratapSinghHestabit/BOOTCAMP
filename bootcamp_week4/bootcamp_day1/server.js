const { app } = require('./src/loaders/app');
const logger = require('./src/utils/logger');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`🚀 Server started on port ${PORT}`);
});
