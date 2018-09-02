

$(".color-op").hide()
$("#ops i").click(function(){
  $(".color-op").toggle(1000)
})

var colors = ["orange","red","yellow","#09c","teal"]
var lis = $("#ops ul li");
for (var i =0 ; i <lis.length ; ++i){
  $("#ops ul   li").eq(i).css("backgroundColor",colors[i]);
}


if (localStorage.getItem("clientcolor") == null){
  $("p,i,h1,h2,h4").css("color","orange");
}
else {
  $("p,i,h1,h2,h4").css("color",localStorage.getItem("clientcolor"));
}

$("#ops ul li").click(function(){
var color = $(this).css("backgroundColor")
$("p,i,h1,h2,h4").css("color",color);
localStorage.setItem("clientcolor",color)
})
