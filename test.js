
<script>
    var test = "I'm global";

function testScope() {
        test = "I'm local";

    console.log(test);
  }

  console.log(test);     // output: I'm global

  testScope();           // output: I'm local

  console.log(test);     // output: I'm local (the global variable is reassigned)
</script>