<template lang="pug">
  .home
    svg-chart
</template>

<script>
// @ is an alias to /src
import SvgChart from "@/components/svg-chart.vue";

export default {
  name: "home",
  components: {
    SvgChart
  }
};
</script>
