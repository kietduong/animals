$(document).ready(function() {

  $("form").submit(function() {
    event.preventDefault();
    var animals = $("#animals").val();

    if (animals === "turtles") {
      $("#turtles").show();
      $("#snakes").hide();
      $("#ctenophores").hide();
    } else if (animals === "snakes") {
      $("#snakes").show();
      $("#turtles").hide();
      $("#ctenophores").hide();
    } else if (animals === "ctenophores") {
      $("#ctenophores").show();
      $("#snakes").hide();
      $("#turtles").hide();
    } else { $("#nothing").show();
    }

  $("#reset").click(function() {
    $("#turtles").hide();
    $("#snakes").hide();
    $("#ctenophores").hide();
  });

  });




});
