$(document).ready(function () {
  function getAddressFields() {
    return $('input[data-autocomplete="address"]');
  }

  function disabledAddressFields(disabled) {
    getAddressFields().each(function () {
      $(this).attr("disabled", disabled);
    });
  }

  function resetAddressFields() {
    getAddressFields().each(function () {
      $(this).val("");
    });
  }

  $("#input-cep").on("blur", function () {
    if (this.checkValidity()) {
      const zipcode = $(this).val();

      resetAddressFields();
      disabledAddressFields(true);

      $.ajax({
        url: `https://viacep.com.br/ws/${zipcode}/json/`,
        type: "GET",
        success: function (response) {
          $("#input-endereco").val(response.logradouro);
          $("#input-bairro").val(response.bairro);
          $("#input-municipio").val(response.localidade);
          $("#input-estado").val(response.uf);
          disabledAddressFields(false);
        },
        error: function () {
          alert("Por favor, digite um CEP válido");
          disabledAddressFields(false);
        },
      });
    }
  });
});
