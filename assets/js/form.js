$(document).ready(function () {
  $("#company-form").on("submit", function (event) {
    event.preventDefault();
    FLUIGC.loading(window).show();
    console.log($(this).serialize());
  });
});
