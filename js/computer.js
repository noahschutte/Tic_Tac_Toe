function computersTurn(game) {
    var grid = game.board.grid;
    var play;
    if (canWinHorizontal(grid)) {
        play = winHorizontal(grid)
        computerPlays(play, game)
    } else if (canWinVertical(grid)) {
        play = winVertical(grid)
        computerPlays(play, game)
    } else if (canWinDiagonal(grid)) {
        play = winDiagonal(grid)
        computerPlays(play, game)
    } else if (canBlockHorizontal(grid)) {
        play = blockHorizontal(grid)
        computerPlays(play, game)
    } else if (canBlockVertical(grid)) {
        play = blockVertical(grid)
        computerPlays(play, game)
    } else if (canBlockDiagonal(grid)) {
        play = blockDiagonal(grid)
        computerPlays(play, game)
    } else {
        play = randomPlay(grid)
        computerPlays(play, game)
    }
};

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function computerPlays(play, game) {
    sleep(500).then(() => {
        $('#row-' + play[1] + ' .col-' + play[0]).html("O");
        game.board.grid[play[0]][play[1]] = "O";
        if (isGameOver(game.board.grid)) {
            game.status = "off"
            $('#instructions').html('Computer Wins!')
            game.computerScore += 1;
            $('#computerScore').html("Computer Score: " + game.computerScore)
            $('#start-game-button').show();
        } else if (tieGame(game.board.grid)) {
            game.status = "off"
            $('#instructions').html('Tie Game!')
            $('#start-game-button').show();
        } else {
            $('#instructions').html('It is your turn.')
        }
    });
}

function canWinHorizontal(grid) {
    if (grid[0][0] === "O" && grid[1][0] === "O" && grid[2][0] === 1) {
        return true
    } else if (grid[0][0] === "O" && grid[2][0] === "O" && grid[1][0] === 1) {
        return true
    } else if (grid[1][0] === "O" && grid[2][0] === "O" && grid[0][0] === 1) {
        return true
    } else if (grid[0][1] === "O" && grid[1][1] === "O" && grid[2][1] === 1) {
        return true
    } else if (grid[0][1] === "O" && grid[2][1] === "O" && grid[1][1] === 1) {
        return true
    } else if (grid[1][1] === "O" && grid[2][1] === "O" && grid[0][1] === 1) {
        return true
    } else if (grid[0][2] === "O" && grid[1][2] === "O" && grid[2][2] === 1) {
        return true
    } else if (grid[0][2] === "O" && grid[2][2] === "O" && grid[1][2] === 1) {
        return true
    } else if (grid[1][2] === "O" && grid[2][2] === "O" && grid[0][2] === 1) {
        return true
    } else {
        return false
    }
}

function winHorizontal(grid) {
    if (grid[0][0] === "O" && grid[1][0] === "O" && grid[2][0] === 1) {
        return [[2], [0]]
    } else if (grid[0][0] === "O" && grid[2][0] === "O" && grid[1][0] === 1) {
        return [[1], [0]]
    } else if (grid[1][0] === "O" && grid[2][0] === "O" && grid[0][0] === 1) {
        return [[0], [0]]
    } else if (grid[0][1] === "O" && grid[1][1] === "O" && grid[2][1] === 1) {
        return [[2], [1]]
    } else if (grid[0][1] === "O" && grid[2][1] === "O" && grid[1][1] === 1) {
        return [[1], [1]]
    } else if (grid[1][1] === "O" && grid[2][1] === "O" && grid[0][1] === 1) {
        return [[0], [1]]
    } else if (grid[0][2] === "O" && grid[1][2] === "O" && grid[2][2] === 1) {
        return [[2], [2]]
    } else if (grid[0][2] === "O" && grid[2][2] === "O" && grid[1][2] === 1) {
        return [[1], [2]]
    } else if (grid[1][2] === "O" && grid[2][2] === "O" && grid[0][2] === 1) {
        return [[0], [2]]
    }
}

function canBlockHorizontal(grid) {
    if (grid[0][0] === "X" && grid[1][0] === "X" && grid[2][0] === 1) {
        return true
    } else if (grid[0][0] === "X" && grid[2][0] === "X" && grid[1][0] === 1) {
        return true
    } else if (grid[1][0] === "X" && grid[2][0] === "X" && grid[0][0] === 1) {
        return true
    } else if (grid[0][1] === "X" && grid[1][1] === "X" && grid[2][1] === 1) {
        return true
    } else if (grid[0][1] === "X" && grid[2][1] === "X" && grid[1][1] === 1) {
        return true
    } else if (grid[1][1] === "X" && grid[2][1] === "X" && grid[0][1] === 1) {
        return true
    } else if (grid[0][2] === "X" && grid[1][2] === "X" && grid[2][2] === 1) {
        return true
    } else if (grid[0][2] === "X" && grid[2][2] === "X" && grid[1][2] === 1) {
        return true
    } else if (grid[1][2] === "X" && grid[2][2] === "X" && grid[0][2] === 1) {
        return true
    } else {
        return false
    }
}

function blockHorizontal(grid) {
    if (grid[0][0] === "X" && grid[1][0] === "X" && grid[2][0] === 1) {
        return [[2], [0]]
    } else if (grid[0][0] === "X" && grid[2][0] === "X" && grid[1][0] === 1) {
        return [[1], [0]]
    } else if (grid[1][0] === "X" && grid[2][0] === "X" && grid[0][0] === 1) {
        return [[0], [0]]
    } else if (grid[0][1] === "X" && grid[1][1] === "X" && grid[2][1] === 1) {
        return [[2], [1]]
    } else if (grid[0][1] === "X" && grid[2][1] === "X" && grid[1][1] === 1) {
        return [[1], [1]]
    } else if (grid[1][1] === "X" && grid[2][1] === "X" && grid[0][1] === 1) {
        return [[0], [1]]
    } else if (grid[0][2] === "X" && grid[1][2] === "X" && grid[2][2] === 1) {
        return [[2], [2]]
    } else if (grid[0][2] === "X" && grid[2][2] === "X" && grid[1][2] === 1) {
        return [[1], [2]]
    } else if (grid[1][2] === "X" && grid[2][2] === "X" && grid[0][2] === 1) {
        return [[0], [2]]
    }
}

function canWinVertical(grid) {
    if (grid[0][0] === "O" && grid[0][1] === "O" && grid[0][2] === 1) {
        return true
    } else if (grid[0][0] === "O" && grid[0][2] === "O" && grid[0][1] === 1) {
        return true
    } else if (grid[0][1] === "O" && grid[0][2] === "O" && grid[0][0] === 1) {
        return true
    } else if (grid[1][0] === "O" && grid[1][1] === "O" && grid[1][2] === 1) {
        return true
    } else if (grid[1][0] === "O" && grid[1][2] === "O" && grid[1][1] === 1) {
        return true
    } else if (grid[1][1] === "O" && grid[1][2] === "O" && grid[1][0] === 1) {
        return true
    } else if (grid[2][0] === "O" && grid[2][1] === "O" && grid[2][2] === 1) {
        return true
    } else if (grid[2][0] === "O" && grid[2][2] === "O" && grid[2][1] === 1) {
        return true
    } else if (grid[2][1] === "O" && grid[2][2] === "O" && grid[2][0] === 1) {
        return true
    } else {
        return false
    }
}

function winVertical(grid) {
    if (grid[0][0] === "O" && grid[0][1] === "O" && grid[0][2] === 1) {
        return [[0], [2]]
    } else if (grid[0][0] === "O" && grid[0][2] === "O" && grid[0][1] === 1) {
        return [[0], [1]]
    } else if (grid[0][1] === "O" && grid[0][2] === "O" && grid[0][0] === 1) {
        return [[0], [0]]
    } else if (grid[1][0] === "O" && grid[1][1] === "O" && grid[1][2] === 1) {
        return [[1], [2]]
    } else if (grid[1][0] === "O" && grid[1][2] === "O" && grid[1][1] === 1) {
        return [[1], [1]]
    } else if (grid[1][1] === "O" && grid[1][2] === "O" && grid[1][0] === 1) {
        return [[1], [0]]
    } else if (grid[2][0] === "O" && grid[2][1] === "O" && grid[2][2] === 1) {
        return [[2], [2]]
    } else if (grid[2][0] === "O" && grid[2][2] === "O" && grid[2][1] === 1) {
        return [[2], [1]]
    } else if (grid[2][1] === "O" && grid[2][2] === "O" && grid[2][0] === 1) {
        return [[2], [0]]
    }
}

function canBlockVertical(grid) {
    if (grid[0][0] === "X" && grid[0][1] === "X" && grid[0][2] === 1) {
        return true
    } else if (grid[0][0] === "X" && grid[0][2] === "X" && grid[0][1] === 1) {
        return true
    } else if (grid[0][1] === "X" && grid[0][2] === "X" && grid[0][0] === 1) {
        return true
    } else if (grid[1][0] === "X" && grid[1][1] === "X" && grid[1][2] === 1) {
        return true
    } else if (grid[1][0] === "X" && grid[1][2] === "X" && grid[1][1] === 1) {
        return true
    } else if (grid[1][1] === "X" && grid[1][2] === "X" && grid[1][0] === 1) {
        return true
    } else if (grid[2][0] === "X" && grid[2][1] === "X" && grid[2][2] === 1) {
        return true
    } else if (grid[2][0] === "X" && grid[2][2] === "X" && grid[2][1] === 1) {
        return true
    } else if (grid[2][1] === "X" && grid[2][2] === "X" && grid[2][0] === 1) {
        return true
    } else {
        return false
    }
}

function blockVertical(grid) {
    if (grid[0][0] === "X" && grid[0][1] === "X" && grid[0][2] === 1) {
        return [[0], [2]]
    } else if (grid[0][0] === "X" && grid[0][2] === "X" && grid[0][1] === 1) {
        return [[0], [1]]
    } else if (grid[0][1] === "X" && grid[0][2] === "X" && grid[0][0] === 1) {
        return [[0], [0]]
    } else if (grid[1][0] === "X" && grid[1][1] === "X" && grid[1][2] === 1) {
        return [[1], [2]]
    } else if (grid[1][0] === "X" && grid[1][2] === "X" && grid[1][1] === 1) {
        return [[1], [1]]
    } else if (grid[1][1] === "X" && grid[1][2] === "X" && grid[1][0] === 1) {
        return [[1], [0]]
    } else if (grid[2][0] === "X" && grid[2][1] === "X" && grid[2][2] === 1) {
        return [[2], [2]]
    } else if (grid[2][0] === "X" && grid[2][2] === "X" && grid[2][1] === 1) {
        return [[2], [1]]
    } else if (grid[2][1] === "X" && grid[2][2] === "X" && grid[2][0] === 1) {
        return [[2], [0]]
    }
}

function canWinDiagonal(grid) {
    if (grid[0][0] === "O" && grid[1][1] === "O" && grid[2][2] === 1) {
        return true
    } else if (grid[0][0] === "O" && grid[2][2] === "O" && grid[1][1] === 1) {
        return true
    } else if (grid[1][1] === "O" && grid[2][2] === "O" && grid[0][0] === 1) {
        return true
    } else if (grid[2][0] === "O" && grid[1][1] === "O" && grid[0][2] === 1) {
        return true
    } else if (grid[2][0] === "O" && grid[0][2] === "O" && grid[1][1] === 1) {
        return true
    } else if (grid[1][1] === "O" && grid[0][2] === "O" && grid[2][0] === 1) {
        return true
    } else {
        return false
    }
}

function winDiagonal(grid) {
    if (grid[0][0] === "O" && grid[1][1] === "O" && grid[2][2] === 1) {
        return [[2], [2]]
    } else if (grid[0][0] === "O" && grid[2][2] === "O" && grid[1][1] === 1) {
        return [[1], [1]]
    } else if (grid[1][1] === "O" && grid[2][2] === "O" && grid[0][0] === 1) {
        return [[0], [0]]
    } else if (grid[2][0] === "O" && grid[1][1] === "O" && grid[0][2] === 1) {
        return [[0], [2]]
    } else if (grid[2][0] === "O" && grid[0][2] === "O" && grid[1][1] === 1) {
        return [[1], [1]]
    } else if (grid[1][1] === "O" && grid[0][2] === "O" && grid[2][0] === 1) {
        return [[2], [0]]
    }
}

function canBlockDiagonal(grid) {
    if (grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === 1) {
        return true
    } else if (grid[0][0] === "X" && grid[2][2] === "X" && grid[1][1] === 1) {
        return true
    } else if (grid[1][1] === "X" && grid[2][2] === "X" && grid[0][0] === 1) {
        return true
    } else if (grid[2][0] === "X" && grid[1][1] === "X" && grid[0][2] === 1) {
        return true
    } else if (grid[2][0] === "X" && grid[0][2] === "X" && grid[1][1] === 1) {
        return true
    } else if (grid[1][1] === "X" && grid[0][2] === "X" && grid[2][0] === 1) {
        return true
    } else {
        return false
    }
}

function blockDiagonal(grid) {
    if (grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === 1) {
        return [[2], [2]]
    } else if (grid[0][0] === "X" && grid[2][2] === "X" && grid[1][1] === 1) {
        return [[1], [1]]
    } else if (grid[1][1] === "X" && grid[2][2] === "X" && grid[0][0] === 1) {
        return [[0], [0]]
    } else if (grid[2][0] === "X" && grid[1][1] === "X" && grid[0][2] === 1) {
        return [[0], [2]]
    } else if (grid[2][0] === "X" && grid[0][2] === "X" && grid[1][1] === 1) {
        return [[1], [1]]
    } else if (grid[1][1] === "X" && grid[0][2] === "X" && grid[2][0] === 1) {
        return [[2], [0]]
    }
}

function randomPlay(grid) {
    if (grid[0][0] === 1) {
        return [[0], [0]]
    } else if (grid[1][0] === 1) {
        return [[1], [0]]
    } else if (grid[2][0] === 1) {
        return [[2], [0]]
    } else if (grid[0][1] === 1) {
        return [[0], [1]]
    } else if (grid[1][1] === 1) {
        return [[1], [1]]
    } else if (grid[2][1] === 1) {
        return [[2], [1]]
    } else if (grid[0][2] === 1) {
        return [[0], [2]]
    } else if (grid[1][2] === 1) {
        return [[1], [2]]
    } else if (grid[2][2] === 1) {
        return [[2], [2]]
    }
}
