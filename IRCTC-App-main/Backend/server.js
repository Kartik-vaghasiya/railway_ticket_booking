const express = require("express");
const app = express();
const db = require("./DatabaseConnection.js");
const userRoute = require("./routes/userRoute");
const cors = require("cors");

app.use(express.json());

app.use('/api/user/', userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
