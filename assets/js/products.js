$(document).ready(function () {
  $('#add-product-button').click(function (event) {
    event.preventDefault();

    $('[data-product]').first().clone().insertBefore($(this));
  });
});
