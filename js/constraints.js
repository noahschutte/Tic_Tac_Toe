function isGameOver(grid) {
    if (isRowComplete(grid) || isColumnComplete(grid) || isDiagonalComplete(grid)) {
        return true
    } else {
        return false
    }
}

function isColumnComplete(grid) {
    for (var c = 0; c < 3; c += 1) {
        if (grid[c][0] === "X" && grid[c][1] === "X" && grid[c][2] === "X") {
            debugger;
            $('.col-' + c).css("background-color", "green")
            return true
        } else if (grid[c][0] === "O" && grid[c][1] === "O" && grid[c][2] === "O") {
            $('.col-' + c).css("background-color", "red")
            return true
        }
    }
    return false
}

function isRowComplete(grid) {
    for (var r = 0; r < 3; r += 1) {
        if (grid[0][r] === "X" && grid[1][r] === "X" && grid[2][r] === "X") {
            $('#row-' + r + ' td').css("background-color", "green")
            return true
        } else if (grid[0][r] === "O" && grid[1][r] === "O" && grid[2][r] === "O") {
            $('#row-' + r + ' td').css("background-color", "red")
            return true
        }
    }
    return false
}

function isDiagonalComplete(grid) {
    if (grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X") {
        $('#row-0 .col-0').css("background-color", "green")
        $('#row-1 .col-1').css("background-color", "green")
        $('#row-2 .col-2').css("background-color", "green")
        return true
    } else if (grid[0][2] === "X" && grid [1][1] === "X" && grid[2][0] === "X") {
        $('#row-2 .col-0').css("background-color", "green")
        $('#row-1 .col-1').css("background-color", "green")
        $('#row-0 .col-2').css("background-color", "green")
        return true
    } else if (grid[0][0] === "O" && grid[1][1] === "O" && grid[2][2] === "O") {
        $('#row-0 .col-0').css("background-color", "red")
        $('#row-1 .col-1').css("background-color", "red")
        $('#row-2 .col-2').css("background-color", "red")
        return true
    } else if (grid[0][2] === "O" && grid [1][1] === "O" && grid[2][0] === "O") {
        $('#row-2 .col-0').css("background-color", "red")
        $('#row-1 .col-1').css("background-color", "red")
        $('#row-0 .col-2').css("background-color", "red")
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
    $('td').css("background-color", "blue")
    return true
}
