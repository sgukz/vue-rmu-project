<template>
  <div>
    <Header />
    <Into />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Into from "@/components/Into";

export default {
  name: "HelloWorld",
  components: {
    Header,
    Into,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
