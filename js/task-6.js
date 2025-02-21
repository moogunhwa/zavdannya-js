<script type="module">
  let total = 0;

  while (true) {
    const input = prompt('Введіть число:');

    if (input === null) {
      alert(`Загальна сума чисел дорівнює ${total}`);
      break;
    }

    const number = Number(input);
    if (isNaN(number)) {
      alert('Було написано не число, спробуйте ще раз');
    } else {
      total += number;
    }
  }
</script>
