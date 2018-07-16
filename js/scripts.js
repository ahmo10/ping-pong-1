$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
    var output=parseInt($("input#input1").val());
    result(output);
    numbers.forEach(function(number){
      $("#results").append("<li>"+number+"</li>")
    });
  });
});
//business end
var numbers=[];
 function result(output){
  for (var index=1;index<output;index++){
  if (index%15===0) {
    numbers.push("pingpong")
  }else if (index%3===0) {
    numbers.push("ping");
  }else if(index%5===0) {
    numbers.push("pong");
  }
  else {
    numbers.push(index);
  }
  }
};
