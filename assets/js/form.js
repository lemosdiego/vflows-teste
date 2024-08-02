$(document).ready(function () {
  $("#company-form").on("submit", function (event) {
    event.preventDefault();
    FLUIGC.loading(window).show();

    const data = $(this)
      .serializeArray()
      .reduce(function (field, item) {
        field[item.name] = item.value;
        return field;
      }, {});

    console.log(data);

    $(this)[0].reset();

    FLUIGC.loading(window).hide();
  });
});
