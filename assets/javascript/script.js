$('document').ready(function() {
   console.log("Page Loaded");

   $('.modal').modal();

   $('.tabs').tabs();

   $('.nav-tabs').click(function(e) {
      event.preventDefault();
      $(e.target).addClass("active");
      console.log(e.target);
   });

});