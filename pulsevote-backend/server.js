import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// simple JSON endpoint
app.get("/test", (req, res) => {
  res.json({ message: "Backend is working", status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
