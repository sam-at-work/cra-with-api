import path from "path";
import express from "express";

const isProd = process.env.NODE_ENV === "production";
const PORT = isProd ? 4004 : 3003;
const buildDir = path.join(__dirname, '..', "client-production-build");

const app = express();

app.get("/api", (req, res) => res.json({ message: "Hello from Express" }));

if (isProd) {
  app.use(express.static(buildDir));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(buildDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  for (const m of [
    `Node server listening on port ${PORT}!`,
    `NODE_ENV is: ${process.env.NODE_ENV}`
  ].values()) {
    console.info(m);
  }
});
