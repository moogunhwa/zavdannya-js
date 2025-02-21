<script type="module">
  const credits = 23580;
  const pricePerDroid = 3000;
  const quantity = prompt('Скільки дроїдів ви хочете купити?');

  if (quantity === null) {
    console.log('Скасовано користувачем!');
  } else {
    const totalPrice = pricePerDroid * quantity;
    if (totalPrice > credits) {
      console.log('Недостатньо коштів на рахунку!');
    } else {
      console.log(`Ви купили ${quantity} дроїдів, на рахунку залишилося ${credits - totalPrice} кредитів.`);
    }
  }
</script>
