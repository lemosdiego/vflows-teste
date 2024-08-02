$(document).ready(function () {
  function disabledRemoveProducts(disabled) {
    $('[data-product-remove]').each(function () {
      $(this).attr('disabled', disabled);
    });
  }

  function calculateTotal(value, quantity) {
    return value * quantity;
  }

  $('#add-product-button').click(function (event) {
    event.preventDefault();

    const productPanel = $('[data-product]').first().clone(true);
    productPanel.find('input').each(function () {
      $(this).val('');
    });
    productPanel.insertBefore($(this));

    disabledRemoveProducts(false);
  });

  $('[data-product-remove]').click(function (event) {
    event.preventDefault();

    $(this).parents('[data-product]').remove();

    const hasOneProduct = $('[data-product]').length === 1;

    disabledRemoveProducts(hasOneProduct);
  });

  $(
    'input[data-product-field="value"], input[data-product-field="quantity"]'
  ).on('input', function () {
    const productPanel = $(this).parents('[data-product]');
    const valueInput = productPanel.find('input[data-product-field="value"]');
    const quantityInput = productPanel.find(
      'input[data-product-field="quantity"]'
    );
    const totalInput = productPanel.find('input[data-product-field="total"]');
    const value = parseFloat(valueInput.val()) || 0;
    const quantity = parseFloat(quantityInput.val()) || 0;
    const total = calculateTotal(value, quantity);

    totalInput.val(total.toFixed(2));
  });
});
