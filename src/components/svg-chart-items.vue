<template lang="pug">
    svg.chart-items(:width="_setSvgWidth", :height="svgHeight", @mouseenter="onMouseOver", @mouseleave="onMouseOver")
      svg-chart-item(v-for="item, index in items",
        :key="`chart-${index}`",
        :position="_setPosition(index)",
        :itemHeight="svgHeight",
        :hovered="hovered")
</template>

<script>
import svgChartItem from './svg-chart-item.vue';

export default {
  name: 'svg-chart-items',
  components: {
    svgChartItem
  },
  props: {
    bgColor: String,
    svgHeight: String,
    items: Number
  },
  data() {
    return {
      width: 100,
      hovered: false
    };
  },
  computed: {
    _setSvgWidth() {
      return `${this.width}%`;
    }
  },
  methods: {
    _setBgColor() {
      this.$el.style.setProperty('--bg-color', this.bgColor);
    },
    _setPosition(index) {
      const fraction = 100 / this.items;
      const offSet = fraction / 2;
      const position = fraction * index;

      return offSet + position;
    },
    onMouseOver() {
      this.hovered = !this.hovered;
    }
  },
  mounted() {
    this._setBgColor();
  }
};
</script>

<style lang="sass">
.chart-items
    $root-node: &
    background: var(--bg-color)
</style>
