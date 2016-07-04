$(document).ready(function() {

    function Game() {
        this.status = "off"
        this.board = new Board();
        this.boardView = new BoardView();
        this.players = ["human", "computer"]
        this.humanScore = 0;
        this.computerScore = 0;
    }

    var game = new Game();

    $('#start-game-button').on('click', function(event) {
        game.boardView.clearBoard(game.board.grid);
        game.status = "on";
        game.firstTurn = game.players[Math.floor(Math.random() * 2)];
        if (game.firstTurn === "computer") {
            computersTurn(game)
        }
        $('#start-game-button').hide();
        $('#instructions').html('Select a square to play.');
    });

    $('.square').on('click', function(event) {
        if (game.status === "on") {
            var event = event.target;
            var square = game.board.grid[event.id.slice(4)][event.parentElement.id.slice(4)]
            if (square === 1) {
                $(event).append('X')
                game.board.grid[event.id.slice(4)][event.parentElement.id.slice(4)] = "X"
                $('#instructions').html('');
                if (isGameOver(game.board.grid)) {
                    game.status = "off"
                    $('#instructions').html('You Win!')
                    game.humanScore += 1;
                    $('#humanScore').html("Human Score: " + game.humanScore)
                    $('#start-game-button').show();
                } else if (tieGame(game.board.grid)) {
                    game.status = "off"
                    $('#instructions').html('Tie Game!')
                    $('#start-game-button').show();
                } else {
                    computersTurn(game)
                }
            } else {
                $('#instructions').html('Select an empty square.')
            }
        } else {
            $('#instructions').html("Press Start Game to Play")
        }
    });
});
