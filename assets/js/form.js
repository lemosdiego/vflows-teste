$(document).ready(function () {
  const STORAGE_NAME = "attachments";

  $("#company-form").on("submit", function (event) {
    event.preventDefault();

    FLUIGC.loading(window).show();
    const products = $("[data-product]")
      .map(function () {
        const product = $(this)
          .find("input[data-product-name], select[data-product-name]")
          .map(function () {
            const name = $(this).data("product-name");
            const value = $(this).val();
            return {
              name,
              value,
            };
          })
          .get()
          .reduce((field, item) => {
            field[item.name] = item.value;
            return field;
          }, {});
        return product;
      })
      .get();
    console.log(products);

    const attachments = FLUIGC.sessionStorage.getItem(STORAGE_NAME) || [];

    const formData = $(this)
      .serializeArray()
      .reduce(function (field, item) {
        field[item.name] = item.value;
        return field;
      }, {});

    const data = {
      ...formData,
      produtos: products,
      anexos: attachments,
    };

    console.log(JSON.stringify(data));

    $(this)[0].reset();
    FLUIGC.sessionStorage.clear();

    FLUIGC.loading(window).hide();
  });
});
