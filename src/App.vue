<template>
<div class="wrapper">
  <TheHeader />
  <div class="wrapper-content">
    <div class="container">
      Тут будет какой-то контент <br>
      <NotFound />
    </div>
  </div>
</div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import notFound from "./pages/notFound.vue"
export default {
  components: {
    TheHeader,
    notFound
  }
}
</script>
<style lang="scss">
</style>
