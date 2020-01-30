<template>
  <div id="app">
    <Navbar/>
<!--    <router-view/>-->
      <router-view/>

   <Index/>

  </div>
</template>

<script>
import Index from './components/Index'
import Navbar from './components/Navbar'


export default {
  name: 'app',
  components: {
    Index,
    Navbar,

  }
}
</script>

<style>

</style>
