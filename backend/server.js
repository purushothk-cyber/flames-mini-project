const express = require("express");
const cors = require("cors");

const findFlames = require("./flamesLogic");
const { startGame, tryGuess } = require("./guessLogic");

const app = express(); // ✅ app MUST be here

app.use(cors());
app.use(express.json());

/* ---------- FLAMES API ---------- */
app.post("/flames", (req, res) => {
    const { name1, name2 } = req.body;

    if (!name1 || !name2) {
        return res.status(400).json({ error: "Both names required" });
    }

    const result = findFlames(name1, name2);
    res.json({ result });
});

/* ---------- GUESSING GAME API ---------- */
app.get("/guess/start", (req, res) => {
    res.json(startGame());
});

app.post("/guess/try", (req, res) => {
    const { guess } = req.body;

    if (!guess) {
        return res.status(400).json({ error: "Guess is required" });
    }

    res.json(tryGuess(Number(guess)));
});

/* ---------- SERVER ---------- */
app.listen(3000, () => {
    console.log("🔥 Server running on http://localhost:3000");
});
