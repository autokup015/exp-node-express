# exp-node-express

1. init node

```shell
pnpm init
```

2. create index.ts

```file
index.ts
```

3. install express package

```shell
pnpm i express cors body-parser nodemon
```

4. create tsconfig.json (if you dont have tsc => npm install typescript -g)

```shell
tsc --init
```

5. install types

```shell
pnpm i -D @types/node typescript @types/express ts-node
```

6. setting package.json

```json
  "scripts": {
    "start": "ts-node index.ts",
    "start:mon": "nodemon index.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

7. Index.ts

```ts
import express, { Request, Response } from "express";

const app = express();
const bodyParser = require("body-parser");
const core = require("cors");
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(core());

// --------------------------- First Get api ---------------------------

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World naja!");
});

// --------------------------- Modules ---------------------------

// ---------------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
```

8. run command

```shell
npm run start
```

or run with Nodemon

```shell
npm run start:mon
```