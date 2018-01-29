const express = require("express");
const routes = require("./server/routes");

const app = express();
const port = process.env.PORT || 8080;
app.use("/", routes);
app.listen(port, () => console.log(`server listening on port ${port}`));
