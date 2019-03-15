// Tip: 1000 ms = 1 second.
var resetRotations = false;

$(document).ready(function(){
  resetAll();
  fadeFunction("#div1", 20000, 100000, 2000);
  fadeFunction("#div2", 10000, 100000, 2000);
  fadeFunction("#div3", 20000, 100000, 2000);
  fadeFunction("#div4", 20000, 100000, 2000);
  fadeFunction("#div5", 20000, 100000, 2000);
  fadeFunction("#div6", 20000, 30000, 2000);
  fadeFunction("#div7", 50000, 20000, 2000);
  fadeFunction("#div8", 60000, 20000, 2000);
  fadeFunction("#div9", 5000, 20000, 1000);
    fadeFunction("#div9i", 20000, 21000, 1000);
    fadeFunction("#div9ii", 20000, 22000, 1000);
    fadeFunction("#div9iii", 20000, 23000, 1000);
    fadeFunction("#div9iv", 19000, 24000, 1000);
    fadeFunction("#div9v", 20000, 25000, 1000);
    fadeFunction("#div9vi", 16000, 26000, 1000);
    fadeFunction("#div9vii", 17000, 27000, 1000);
    fadeFunction("#div9viii", 18000, 28000, 1000);
    fadeFunction("#div9ix", 19000, 29000, 1000);
    fadeFunction("#div9x", 10000, 30000, 1000);



  fadeFunction("#div10", 20000, 100000, 2000);
  fadeFunction("#div11", 20000, 30000, 2000);
  fadeFunction("#div12", 50000, 20000, 2000);
  fadeFunction("#div13", 60000, 20000, 2000);
  fadeFunction("#div14", 5000, 20000, 1000);

  fadeFunction("#diva", 500000, 20000, 5000);
  fadeFunction("#divb", 30000, 200000, 2000);
  fadeFunction("#divc", 30000, 300000, 2000);
  fadeFunction("#divd", 40000, 100000, 2000);
  fadeFunction("#dive", 150000, 100000, 2000);
  fadeFunction("#divf", 60000, 70000, 1000);
  fadeFunction("#divg", 10000, 60000, 2000);
  fadeFunction("#divh", 20000, 50000, 2000);
  fadeFunction("#divi", 30000, 50000, 2000);

  fadeFunction("#divki", 20000, 100000, 2000);
  fadeFunction("#divkii", 20000, 30000, 2000);
  fadeFunction("#divkiii", 50000, 20000, 2000);
  fadeFunction("#divkvi", 60000, 20000, 2000);
  fadeFunction("#divkv", 5000, 20000, 1000);

});

function fadeFunction(selector, durationOff, durationOn, durationTransition){
  var durationLoop = durationOn + durationOff + (durationTransition * 2);
  if(resetRotations){
    setInterval(function() {
      $(selector).fadeIn(durationTransition).delay(durationOn).fadeOut(durationTransition);
    }, durationLoop);
  }else{
    setInterval(function() {
      $(selector).fadeTo(durationTransition,1.0).delay(durationOn).fadeTo(durationTransition,0.0);
    }, durationLoop);
  }
}

function resetAll(){
  var indexInit = 1;
  var indexEnd = 14; //WHEN YOU ADD MORE DIVS, CHANGE THIS TO THE LAST DIV NUMBER
  for(var i=indexInit;i<=indexEnd;i++){
    var id = "#div" + i.toString();
    if(resetRotations){
      $(id).css("display", "none");
    }
    else{
      $(id).css("opacity", "0.0");
    }
  }
}
