<template lang="pug">
  .many-components
    .container
      label
        input(type="number", v-model="svgHeight" min="0")
        span.label svg height in 'em'
      label
        input(type="number", v-model.number="itemNum" min="0")
        span.label item num

    .container
      SvgChartItems(:bgColor="bgColor", :svgHeight="_setSvgHeight", :items="itemNum")
</template>

<script>
import SvgChartItems from '@/components/svg-chart-items.vue';

export default {
  name: 'many-components',
  components: {
    SvgChartItems
  },
  data() {
    return {
      bgColor: '#7f8fa6',
      svgHeight: 8,
      itemNum: 5
    };
  },
  computed: {
    _setSvgHeight() {
      return `${this.svgHeight}em`;
    }
  }
};
</script>

<style lang="sass">
.many-components
  flex-direction: column

.container
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%

  & + &
    margin-top: 1em

.label
  margin-left: 0.5em
</style>
