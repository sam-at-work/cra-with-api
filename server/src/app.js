import express from "express";

const PORT = process.env.NODE_ENV === 'production' ? 4004 : 3003;
const app = express();

app.use(express.static('static'));

app.get("/api", (req, res) => res.json({ message: "Hello from Express" }));
app.listen(PORT, () => {
  console.log(`Node server listening on port ${PORT}!`);
  console.log(`NODE_ENV is: ${process.env.NODE_ENV}`);
});
