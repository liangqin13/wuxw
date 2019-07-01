<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang='scss'>
@import './assets/fonts/font.css';
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  /* -webkit-touch-callout:none;
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none; */
}
article, aside, blockquote, body, button, dd,
details, div, dl, dt, fieldset, figcaption,
figure, footer, form, h1, h2, h3, h4, h5, h6,
header, hgroup, hr, input, legend, li, menu,
nav, ol, p, section, td, textarea, th, ul {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "3DSFont";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.anchorBL{
  display: none;
}
</style>
