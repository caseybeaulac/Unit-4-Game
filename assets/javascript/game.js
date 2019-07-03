//game start generate random number
$(document).ready(function() {
  // initializing variables
  var score = 0;
  var losses = 0;
  var yourNum = 0;
  var goalNum = 0;
  var pokeballNum = 0;
  var greatballNum = 0;
  var ultraballNum = 0;
  var masterballNum = 0;

  function restartGame() {
    yourNum = 0;
    goalNum = 0;
    goalNum = Math.floor(Math.random() * 69 + 30);
    pokeballNum = Math.floor(Math.random() * 9) + 2;
    greatballNum = Math.floor(Math.random() * 9) + 2;
    ultraballNum = Math.floor(Math.random() * 9) + 2;
    masterballNum = Math.floor(Math.random() * 9) + 2;
    $("#randomNumDiv").text(goalNum);
    $("#yourNumDiv").text(yourNum);
  }

  goalNum = Math.floor(Math.random() * 69 + 30);
  pokeballNum = Math.floor(Math.random() * 9) + 2;
  greatballNum = Math.floor(Math.random() * 9) + 2;
  ultraballNum = Math.floor(Math.random() * 9) + 2;
  masterballNum = Math.floor(Math.random() * 9) + 2;

  // setting goal number to div and your number to div
  $("#randomNumDiv").text(goalNum);
  $("#yourNumDiv").text(yourNum);
  $("#winsDiv").text(score);
  $("#LossesDiv").text(losses);

  $("#pokeball").text(pokeballNum);
  $("#greatball").text(greatballNum);
  $("#ultraball").text(ultraballNum);
  $("#masterball").text(masterballNum);

  $("#pokeball").click(function() {
    yourNum = parseInt(yourNum) + parseInt(pokeballNum);
    $("#yourNumDiv").text(yourNum);
    if (yourNum === goalNum) {
      confirm("You win! Play again?", true);
      score++;
      $("#winsDiv").text(score);
      restartGame();
    } else if (yourNum > goalNum) {
      confirm("You lose! Play again?");
      losses++;
      restartGame();
    }
  });

  $("#greatball").click(function() {
    yourNum = parseInt(yourNum) + parseInt(greatballNum);
    $("#yourNumDiv").text(yourNum);
    if (yourNum === goalNum) {
      confirm("You win! Play again?", true);
      score++;
      $("#winsDiv").text(score);
      restartGame();
    } else if (yourNum > goalNum) {
      confirm("You lose! Play again?");
      losses++;
      restartGame();
    }
  });

  $("#ultraball").click(function() {
    yourNum = parseInt(yourNum) + parseInt(ultraballNum);
    $("#yourNumDiv").text(yourNum);
    if (yourNum === goalNum) {
      confirm("You win! Play again?", true);
      score++;
      $("#winsDiv").text(score);
      restartGame();
    } else if (yourNum > goalNum) {
      confirm("You lose! Play again?");
      losses++;
      restartGame();
    }
  });

  $("#masterball").click(function() {
    yourNum = parseInt(yourNum) + parseInt(masterballNum);
    $("#yourNumDiv").text(yourNum);
    if (yourNum === goalNum) {
      confirm("You win! Play again?", true);
      score++;
      $("#winsDiv").text(score);
      restartGame();
    } else if (yourNum > goalNum) {
      confirm("You lose! Play again?");
      losses++;
      restartGame();
    }
  });
});

//
//win? play gain yes/no

//lose? play again yes/no
