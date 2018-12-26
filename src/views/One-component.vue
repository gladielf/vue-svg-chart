<template lang="pug">
  .home
    svg-chart
</template>

<script>
// @ is an alias to /src
import SvgChart from "@/components/svg-chart.vue";

export default {
  name: "one-component",
  components: {
    SvgChart
  }
};
</script>
