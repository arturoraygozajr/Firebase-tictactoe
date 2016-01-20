'use strict'

var ref = new Firebase("https://artticktactoe.firebaseio.com/");
var playersRef = ref.child('players');

$(document).ready(init);

function init(){
  $('#alpha').click(something);
  $('#enter').click(enterName);
  
}

function something(){
 
}

function enterName(){
  var name = $('input').val();
  console.log('name:', name);
  playersRef.once('value', function(snapshot){
    if(!snapshot.val()){
      playersRef.push(name).val());
        (snapshot.val()).length===0){
  playersRef.push(name)
}
  });
}
