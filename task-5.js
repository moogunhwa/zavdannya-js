<script type="module">
  const country = prompt('Введіть країну для доставки:');
  const normalizedCountry = country ? country.trim().toLowerCase() : '';
  let price;

  switch (normalizedCountry) {
    case 'китай':
      price = 100;
      break;
    case 'чилі':
      price = 250;
      break;
    case 'австралія':
      price = 170;
      break;
    case 'індія':
      price = 80;
      break;
    case 'ямайка':
      price = 120;
      break;
    default:
      alert('У вашій країні доставка недоступна');
      break;
  }

  if (price) {
    alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
  }
</script>
