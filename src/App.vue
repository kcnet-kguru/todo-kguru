<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="container" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
