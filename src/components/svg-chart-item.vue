<template lang="pug">
    g.chart-item__group(stroke-width="0.5em", stroke-linecap="round")
      line.chart-item__line(:x1="_setPosition", y1="95%", :x2="_setPosition", y2="5%", stroke="#fbc531")
      line.chart-item__line.chart-item__line--mod(:x1="_setPosition", y1="95%", :x2="_setPosition", y2="5%", stroke="#775533", :class="{'chart-item__line--active': hovered}")
</template>

<script>
export default {
  name: 'svg-chat-item',
  props: {
    position: {
      type: Number,
      default: 10
    },
    itemHeight: {
      type: String,
      required: true
    },
    hovered: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      delay: 0
    };
  },
  methods: {
    _setItemHeight() {
      const activeVal = Math.random() * Number(this.itemHeight.split('em')[0]);
      this.$el.style.setProperty('--item-height', this.itemHeight);
      this.$el.style.setProperty('--active-height', `${activeVal}em`);
    },
    _setItemDelay() {
      this.delay = `.${this.position < 10 ? '0' : ''}${
        this.position.toString().split('.')[0]
      }s`;
      this.$el.style.setProperty('--active-delay', this.delay);
    }
  },
  computed: {
    _setPosition() {
      return `${this.position}%`;
    }
  },
  watch: {
    itemHeight() {
      this._setItemHeight();
      this._setItemDelay();
    }
  },
  mounted() {
    this._setItemHeight();
    this._setItemDelay();
  }
};
</script>

<style lang="sass">
.chart-item
  &__line
    &--mod
      stroke-dasharray: var(--item-height)
      stroke-dashoffset: var(--item-height)
      transition: all .25s ease-in-out

    &--active
      stroke-dashoffset: var(--active-height)
      transition-delay: var(--active-delay)
</style>
