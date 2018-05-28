console.log('connected')

var player = 'X'


$('.grid').click(function(event){
    if ($(event.target).text() === ''){
        $(event.target).text(player)
        checkWinner()
        switchPlayer()
    }
})

function checkWinner(){
    if ($('.grid div').eq(0).text() === player && 
        $('.grid div').eq(1).text() === player && 
        $('.grid div').eq(2).text() === player ) {
        $('.section-output').text(player + ' is the winner!')
    }
}

function switchPlayer() {
    if (player === 'X') {
        player = '0'
    } else {
        player = 'X'
    }
}


