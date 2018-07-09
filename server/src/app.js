import express from "express";

const PORT = 3003;
const app = express();

app.use(express.static('static'));

app.get("/api", (req, res) => res.json({ message: "Hello from Express API" }));
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
