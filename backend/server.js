const express = require("express");
const cors = require("cors");
const findFlames = require("./flamesLogic");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/flames", (req, res) => {
    const { name1, name2 } = req.body;

    if (!name1 || !name2) {
        return res.status(400).json({ error: "Both names required" });
    }

    const result = findFlames(name1, name2);
    res.json({ result });
});

app.listen(3000, () => {
    console.log("🔥 FLAMES server running on http://localhost:3000");
});


