const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
    res.json({ message: "All is Wellzzz" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});