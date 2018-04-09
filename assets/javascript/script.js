$('document').ready(function() {
   console.log("Page Loaded");

   $('.modal').modal();

   $('.tabs').tabs();

   $('.materialboxed').materialbox();

   $('.nav-tabs').click(function(e) {
      event.preventDefault();
      $(e.target).addClass("active");
      console.log(e.target);
   });

});