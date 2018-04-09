$('document').ready(function() {
   console.log("Page Loaded");

   $('.modal').modal({
      complete: function() {
      location.reload();
      }
   });

   $('.tabs').tabs();

   $('.materialboxed').materialbox();

   $('.nav-tabs').click(function(e) {
      event.preventDefault();
      $(e.target).addClass("active");
      console.log(e.target);
   });



});