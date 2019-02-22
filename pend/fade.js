$(document).ready(function() {
  fadeThem();
});

function fadeThem() {
  $("#div1").fadeOut(1500, function() {
    $(this).fadeIn(1500, fadeThem());
    // Apply the callback to the one with the shortest combined animation time
  });
  $("#div2").fadeOut(18000, function() {
    $(this).fadeIn(15000);
  });
  $("#div3").fadeOut(36000, function() {
    $(this).fadeIn(30000);
  });
  $("#div4").fadeOut(14000, function() {
    $(this).fadeIn(16000);
  });
  $("#div5").fadeOut(76000, function() {
    $(this).fadeIn(73000);
  });

  $("#div6").fadeOut(22000, function() {
    $(this).fadeIn(25000);
  });

  $("#div7").fadeOut(55000, function() {
    $(this).fadeIn(52000);
  });

  $("#div9").fadeOut(82500, function() {
    $(this).fadeIn(83000);
  });
  $("#div3").fadeOut(93500, function() {
    $(this).fadeIn(94000);
  });
}
