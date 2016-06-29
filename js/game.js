$(document).ready(function() {

    $('#start-game-button').on('click', function(event) {
    })

    function Game() {
        this.board = new Board();
        this.boardView = new BoardView();
    }

    var game = new Game();

    $(document).on('keyup', function(event) {
        event.preventDefault();
        
    });

});
