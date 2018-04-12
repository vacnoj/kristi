$('document').ready(function() {
   console.log("Page Loaded");

   $('.tabs').tabs();

   $('.materialboxed').materialbox();

   $('.nav-tabs').click(function(e) {
      event.preventDefault();
      $(e.target).addClass("active");
      console.log(e.target);
   });

   var videos = {
      video1: "https://www.youtube.com/embed/30oL2tZGxnY",
      video2: "https://www.youtube.com/embed/xbLPAtLdalU",
      video3: "https://www.youtube.com/embed/1FZD8atwErA",
      video4: "https://www.youtube.com/embed/OSzqtK3rT8k",
      video5: "https://www.youtube.com/embed/zypwkzCybWg",
      video6: "https://www.youtube.com/embed/aOabSbw5p2M",
      video7: "https://www.youtube.com/embed/1-OJSNfLFWs",
      video8: "https://www.youtube.com/embed/HO27WKp-LTc",
      video9: "https://www.youtube.com/embed/buMhjDIErzo",
      video10: "https://www.youtube.com/embed/D7dfo_KkQvM"
   }

   $('.modal').modal({
      complete: function() {
      // location.reload();
    
         for (var i=1; i < 11; i++) {
            let video = $("#video" + i).attr("src");
            $("#video" + i).attr("src","");
            $("#video" + i).attr("src",video);
         }
      }

});

});

// var video = $("#playerid").attr("src");
// $("#playerid").attr("src","");
// $("#playerid").attr("src",video);
