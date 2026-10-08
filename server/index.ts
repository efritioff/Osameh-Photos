import express from "express";

const app = express();
app.use(express.json());

app.get("/api/posts", (req, res) => {
    res.json([]);
});

app.listen(3000, () => console.log("server på https://localhost:3000"));