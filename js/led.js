jQuery(document).ready(function(){
   var i = 0;
   for(i; i < 7; i++){
       $(".led_"+i+"4").css("background", "red");
       $(".led_"+i+"5").css("background", "red");
   }

   var y = [0, 1, 4, 7];
   var x = [3, 6];
   var j;
   for(i=0; i<y.length; i++){
       for(j=0; j<x.length; j++){
           $(".led_"+y[i]+x[j]).css("background", "red");
       }
   }
   var x = [2, 7];
   for(i=0; i< x.length; i++){
       $(".led_"+4+x[i]).css("background", "red");
   }
});

function handsup(){
     
}
