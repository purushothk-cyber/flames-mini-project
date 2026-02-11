let game = {
    number: Math.floor(Math.random() * 10) + 1, // 1 to 10
    attempts: 0,
    maxAttempts: 3
};

function startGame() {
    game.number = Math.floor(Math.random() * 10) + 1;
    game.attempts = 0;
    return {
        message: "Game started! Guess a number between 1 and 10",
        attemptsLeft: game.maxAttempts
    };
}

function tryGuess(userGuess) {
    game.attempts++;

    if (userGuess == game.number) {
        return {
            status: "win",
            message: "🎉 Congratulations! You guessed it right!",
            attemptsUsed: game.attempts
        };
    }

    if (game.attempts >= game.maxAttempts) {
        return {
            status: "lose",
            message: "😢 Sorry! Better luck next time",
            correctNumber: game.number
        };
    }

    return {
        status: "retry",
        message: "❌ Wrong guess! Try again",
        attemptsLeft: game.maxAttempts - game.attempts
    };
}

module.exports = { startGame, tryGuess };
