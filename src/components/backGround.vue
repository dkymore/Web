<template>
  <div class="backgroundImg"></div>
</template>

<script>
export default {
    name:"backgroundImg"
}
</script>

<style>
.backgroundImg {
  position:fixed;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  /* min-width: 1000px; */
  z-index:-10;
  zoom: 1;
  background-image: url('https://api-acgimg.iloli.ink/getPhoneCover');
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
</style>