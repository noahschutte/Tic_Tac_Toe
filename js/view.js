var BoardView = function () {
    for (var r = 0; r < 3; r += 1) {
        $('#boardView').append('<tr id="row-' + r + '"></tr>');
        for (var c = 0; c < 3; c += 1) {
            $('#row-' + r).append('<td class="square" id="col-' + c + '"></td>')
        };
    };
}

BoardView.prototype.clearBoard = function(grid) {
    $('.square').html('');
    for (var c = 0; c < 3; c += 1) {
        for (var r = 0; r < 3; r += 1) {
            grid[c][r] = 1;
        }
    }
}
