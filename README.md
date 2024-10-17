# Sample React Express MongoDB

---

https://storybook.js.org/addons/msw-storybook-addon

---

TODO: explain the project

- learning goals

This is a guide to create a fullstack application with React, Express, and MongoDB.

---

TODO: Covered technologies

- [Vite](https://vitejs.dev/) for the client
- [Express](https://expressjs.com/) for the server
- [MongoDB](https://www.mongodb.com/) for the database
- [TypeScript](https://www.typescriptlang.org/) for the client and server
- [Mono Repo](https://en.wikipedia.org/wiki/Monorepo)
- [make](https://www.gnu.org/software/make/) for basic mono repo tooling and automation

---

TODO: Not covered:

- Server-side rendering (like React SSR or Next.js)

---

TODO: usage

```sh
# ./
make install
make clean
```

---

TODO: how did I create this project?

```sh
npm create vite@latest
```

```plain
Project name: client
Select a framework: › React
Select a variant: › TypeScript + SWC
```

```sh
mkdir server
cd server
npm install express mongoose # TODO
npm install --save-dev typescript # TODO
```

---

TODO: explain `index.ts` and `export * from`

like:

```plain
.
├── main.tsx
├── pages
│   ├── Home.tsx
│   ├── RootLayout.tsx
│   ├── UserList.tsx
│   └── index.ts
```

```ts
// pages/index.ts
export * from "./Home";
export * from "./UserList";
export * from "./RootLayout";
```

```ts
// main.tsx
import { Home, UserList, RootLayout } from "./pages";
```

---

TODO: explain alias setup

`tsconfig.json`

```js
"paths": {
    "@client/*": ["./src/*"]
}
```

`vite.config.ts`

```js
resolve: {
    alias: {
        "@client": "/src",
    },
},
```

---

TODO: explain reverse proxy

`vit.config.ts`

```js
server: {
    proxy: {
        "/api": "http://localhost:3000",
    },
},
```

---

`npx storybook@latest init`

https://storybook.js.org/docs/builders/vite
