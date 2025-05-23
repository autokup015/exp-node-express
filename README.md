# exp-node-express

1. init node

```shell
pnpm init
```

2. create index.ts

```shell
touch index.ts
```
3. install express package

```shell
pnpm i express cors body-parser nodemon
```

4. install tsc command (if you have tsc on computer, you not should install again!)

```shell
npm install typescript -g
```

5. create tsconfig.json

```shell
tsc --init
```

6. install types 

```shell
pnpm i -D @types/node typescript @types/express ts-node
```

7. setting package.json
```json
  "scripts": {
    "start": "ts-node src/index.ts",
    "start:mon": "nodemon src/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

8. Index.ts

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

9. run command

```shell
npm run start
```

or

```shell
npm run start:mon
```