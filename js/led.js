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

    handsNeutral();
    $(".HandsUp").click(function(){handsUp();});
    $(".HandsNeutral").click(function(){handsNeutral();});
    $(".HandsDown").click(function(){handsDown();});

});

function handsNeutral(){
     $(".led_"+"32").css("background", "none");
     $(".led_"+"37").css("background", "none");
     $(".led_"+"42").css("background", "red");
     $(".led_"+"47").css("background", "red");
     $(".led_"+"52").css("background", "none");
     $(".led_"+"57").css("background", "none");
}

function handsUp(){
     $(".led_"+"32").css("background", "red");
     $(".led_"+"37").css("background", "red");
     $(".led_"+"42").css("background", "none");
     $(".led_"+"47").css("background", "none");
     $(".led_"+"52").css("background", "none");
     $(".led_"+"57").css("background", "none");
}

function handsDown(){
     $(".led_"+"32").css("background", "none");
     $(".led_"+"37").css("background", "none");
     $(".led_"+"42").css("background", "none");
     $(".led_"+"47").css("background", "none");
     $(".led_"+"52").css("background", "red");
     $(".led_"+"57").css("background", "red");
}
