const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("MADFAN TICKETS SELLERS backend is running!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        message: "Backend is working"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(Server running on port ${PORT});
});
