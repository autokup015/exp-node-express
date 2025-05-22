# exp-node-express

1. init node

```shell
pnpm i init
```

2. create index.ts

```shell
touch index.ts
```
3. install express package

```shell
pnpm i express cors body-parser nodemon
```

4. install tsc command

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