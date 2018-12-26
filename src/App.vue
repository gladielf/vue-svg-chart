<template lang="pug">
  #app
    #nav
      router-link(to="/one-component") One component
      |  |
      |
      router-link(to="/many-components") Many components
    router-view.page
</template>

<style lang="sass">
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

#nav
  padding: 30px;
  a
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active
      color: #42b983;

.page
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
</style>
