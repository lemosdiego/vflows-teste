$(document).ready(function () {
  const STORAGE_NAME = "attachments";

  $("#company-form").on("submit", function (event) {
    event.preventDefault();

    FLUIGC.loading(window).show();
    const attachments = FLUIGC.sessionStorage.getItem(STORAGE_NAME) || [];

    const formData = $(this)
      .serializeArray()
      .reduce(function (field, item) {
        field[item.name] = item.value;
        return field;
      }, {});

    const data = {
      ...formData,
      anexos: attachments,
    };

    console.log(JSON.stringify(data));

    $(this)[0].reset();
    FLUIGC.sessionStorage.clear();

    FLUIGC.loading(window).hide();
  });
});
