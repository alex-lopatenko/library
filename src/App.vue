<template>
<div class="wrapper">
  <TheHeader />
  <div class="wrapper__content">
    <div class="container">
      Тут будет какой-то контент
    </div>
  </div>
</div>
  
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader
  }
}
</script>
<style>
.container {

}
</style>
