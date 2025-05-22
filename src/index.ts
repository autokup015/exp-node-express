import express, { Request, Response } from "express";

const app = express();
const bodyParser = require("body-parser");
const core = require("cors");
const PORT = 4000;

app.use(bodyParser.json());
app.use(core());

// --------------------------- Import Router ---------------------------

const userModules = require("./route/user");

// --------------------------- First Get api ---------------------------

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World naja!");
});

// --------------------------- Modules ---------------------------

app.use("/user", userModules);

// ---------------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
