<template>
    <div id="app">
        <app-header></app-header>
        <app-home></app-home>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppHome from './components/Home.vue'
import AppFooter from './components/Footer.vue'

export default {
 name:'app',
 components: {
  'app-header': AppHeader,
  'app-home': AppHome,
  'app-footer': AppFooter
 }
}
</script>

<style>
body{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 1.6;
    background:#e8f7f0;
}
.container{
    max-width: 1100px;
    margin:auto;
    padding:0 2rem;
}
</style>

