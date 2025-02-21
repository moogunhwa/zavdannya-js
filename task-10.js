<script type="module">
  const formatString = function (string) {
    return string.length <= 40 ? string : `${string.slice(0, 40)}...`;
  };

  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
</script>
