/**
 * When we use [].values(), a babel bug means it doesn't add the
 * required polyfill, even with "useBuiltIns": "usage" set in .babelrc.
 * The import below is a manual work around until the bug is fixed.
 */
import "core-js/modules/es6.array.iterator";
import express from "express";

const isProd = process.env.NODE_ENV === "production";
const PORT = isProd ? 4004 : 3003;

const app = express();

if (isProd) app.use(express.static("client-production-build"));

app.get("/api", (req, res) => res.json({ message: "Hello from Express" }));

app.listen(PORT, () => {
  for (const m of [
    `Node server listening on port ${PORT}!`,
    `NODE_ENV is: ${process.env.NODE_ENV}`
  ].values()) {
    console.log(m);
  }
});
