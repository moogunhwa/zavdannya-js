<script type="module">
  const logItems = function (array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
    }
  };

  logItems(['Alex', 'Poly', 'Robert']);
  logItems([5, 10, 15, 20]);
</script>
