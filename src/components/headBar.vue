<template>
  <div class="head">
    <h3 v-if="$route.matched.length>0&&$route.matched[0].meta.title"> {{$route.matched[0].meta.title}} | 作者: {{$route.matched[0].meta.author}} </h3> 
    <h4>2班 35组</h4>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.head{
    position: fixed;
    top:0px;
    left:0px;
    right: 0px;
    /* margin: 0px 20px; */
    padding: 0px 20px;
    height: 50px;
    /* width: 100%; */
    z-index: 2;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 30px 30px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}
</style>