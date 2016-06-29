var BoardView = function () {
    for (var r = 0; r < 3; r++) {
        $('#boardView').append('<tr id="row-' + r + '"></tr>');
    };
    for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 3; c++) {
            $('#row-' + r).append('<td class="col-' + c + '">[]</td>')
        }
    }
}

BoardView.prototype.clearBoard = function(grid) {
  for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[r].length; c++) {
      $('#boardView #row-' + r + ' .col-' + c).css("color","white");
      $('#boardView #row-' + r + ' .col-' + c).css("background-color","white");
    }
  }
}

BoardView.prototype.renderBoard = function(grid, activePiece) {
  for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === "X") {
        $('#boardView #row-' + r + ' .col-' + c).css("color","red");
      }
      if (grid[r][c] === "O") {
        $('#boardView #row-' + r + ' .col-' + c).css("color","black");
      }
    }
  }
}
