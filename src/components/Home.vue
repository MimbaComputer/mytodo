<template>
  <div id="app-home">
      <b-container fluid class="a">
        <b-row align-h="center">
            <b-col cols="8"><home-left></home-left></b-col>
            <b-col cols="4"><home-right></home-right></b-col>
        </b-row>
      </b-container>
  </div>
</template>

<script>
import HomeLeft from './Left.vue'
import HomeRight from './Right.vue'

export default {
 components: {
  'home-left': HomeLeft,
  'home-right': HomeRight
 }

}
</script>

<style scoped>
    a {
        background-color: black
    }
    li{
        display: inline-block;
        margin: 0 10px;
    }
    ul{
        list-style-type: none;
        text-align: center;
        margin: 0;
    }
    nav{
        background: #444;
        padding: 14px 0;
        margin-bottom: 40px;
    }
    .router-link-active{
        color: #444;
        background: rgb(168, 43, 43);
    }
</style>
