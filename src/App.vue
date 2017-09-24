<template>
  <div class="is-flex" id="app">
    <div class="container">
      <div class="columns">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '~bulma/bulma.sass';
@import '~font-awesome/css/font-awesome.min.css';

$gray: #ccc;

.is-hcentered {
  margin-left: auto;
  margin-right: auto;
}

html,
body {
  height: 100%;
}

#app {
  background: $gray;
  flex-flow: column;
  height: 100%;
  .container {
    margin: auto;
  }
}
</style>
