var ref = new Firebase("https://artticktactoe.firebaseio.com/");
var playersRef= ref.child('players');
var gameRef = ref.child('gameState');
var myTurn = true;
//var o = false;
var cnt =0; 
var player;
$(document).ready(init);
function init(){
  $('.col').on('click', markBox)

  $('#submit').click(enterName);
  //monitor turn child
  ref.child('turn').on('value', function(snap){
    var whoseTurn = snap.val();
    if(!whoseTurn){
      return; 
    }
    if(whoseTurn === player){
      myTurn = true; 
      return
    }
  });
}
function enterName(){
  console.log($('#username').val());
  playersRef.once('value', function(snapshot){
    console.log(snapshot.val());
    if(!snapshot.val()){
      playersRef.push($('#username').val());
      player = 'player1';
    }
    else if(Object.keys(snapshot.val()).length===1){
      playersRef.push($('#username').val());
      player = 'player2';
      startGame();
    }else{
      return;
    }
  });
}
function markBox(e){
  if (!myTurn){
    return;
  }
  if(myTurn){
    if(player === "player1"){
      $(e.target).text("X");
    } else {
      $(e.target).text("O");
    }
  }
}
function startGame(event){
  //make turn child in firebase, and intialize it to player1.
  ref.child('turn').set('player1');
  /////////////
  var boxGame = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  gameRef.set(boxGame);
  
  
}