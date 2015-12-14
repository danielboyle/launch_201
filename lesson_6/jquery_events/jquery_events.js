$(function() {

  $("form").on("submit", function(e) {
    e.preventDefault();
    var character = $("#key").val(),
        charcter_code = character.charCodeAt(0);

    $(document).off("keypress").on("keypress", function(e) {
      if (e.which !== charcter_code) { return; }
      $("a").trigger("click");
    });
  });

  $("a").on("click", function(e) {
    e.preventDefault();
    $("#accordion").slideToggle();
  });

});
