require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
require("./src/loaders/db"); // make sure MongoDB connects before starting server

const app = require("./src/loaders/app");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
