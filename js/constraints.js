function isGameOver(grid) {
    if (isRowComplete(grid) || isColumnComplete(grid) || isDiagonalComplete(grid)) {
        return true
    } else {
        return false
    }
}

function isColumnComplete(grid) {
    for (var c = 0; c < 3; c += 1) {
        if (grid[c][0] === "X" && grid[c][1] === "X" && grid[c][2] === "X" || grid[c][0] === "O" && grid[c][1] === "O" && grid[c][2] === "O") {
            return true
        }
    }
    return false
}

function isRowComplete(grid) {
    for (var r = 0; r < 3; r += 1) {
        if (grid[0][r] === "X" && grid[1][r] === "X" && grid[2][r] === "X" || grid[0][r] === "O" && grid[1][r] === "O" && grid[2][r] === "O") {
            return true
        }
    }
    return false
}

function isDiagonalComplete(grid) {
    if (grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X" || grid[0][2] === "X" && grid [1][1] === "X" && grid[2][0] === "X" || grid[0][0] === "O" && grid[1][1] === "O" && grid[2][2] === "O" || grid[0][2] === "O" && grid [1][1] === "O" && grid[2][0] === "O") {
        return true
    } else {
        return false
    }
}

function tieGame(grid) {
    for (var c = 0; c < 3; c += 1) {
        for (var r = 0; r < 3; r += 1) {
            if (grid[c][r] === 1) {
                return false
            }
        }
    }
    return true
}
