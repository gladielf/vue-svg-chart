<template lang="pug">
  svg.chart(width="100%", height="8em")
    g.chart__group(v-for="item, index in items", stroke-width="0.5em", stroke-linecap="round")
      line.chart__line(:x1="_getPosition(index)", y1="95%", :x2="_getPosition(index)", y2="5%", stroke="#ff5683")
      line.chart__line.chart__line--mod(:x1="_getPosition(index)", y1="95%", :x2="_getPosition(index)", y2="5%", stroke="#531af0")
</template>

<script>
export default {
  name: "svg-chart",
  data() {
    return {
      items: 8,
      width: 100
    };
  },
  computed: {
    _getOffset() {
      return this.width / this.items / 2;
    }
  },
  methods: {
    _getPosition(index) {
      const position = (this.width / this.items) * index;

      return `${this._getOffset + position}%`;
    }
  }
};
</script>

<style lang="sass">
    @function calcu($val)
        @return 8em * $val / 100

    $list: (calcu(25), calcu(60), calcu(30), calcu(75), calcu(40), calcu(50), calcu(88), calcu(66))

    .chart
        --pos: 8em
        $root-node: &
        background: #ccccfc

        &:hover
          #{$root-node}__group
            @for $i from 1 through length($list)
              &:nth-child(#{$i})
                --pos: #{nth($list, $i)}
                #{$root-node}__line--mod
                    transition-delay: .15s * ($i - 1)

        &__line
            &--mod
              stroke-dasharray: 8em 8em
              stroke-dashoffset: var(--pos)
              transition: all .25s ease-in-out
</style>
