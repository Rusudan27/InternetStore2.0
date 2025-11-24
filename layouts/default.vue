
<template>
  <div class="layout">
    <Header />
    <Menu />
    <NuxtPage class="layout__page" />
    <Footer />
  </div>
</template>


<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  &__page {
    flex-grow: 1;
  }
}
</style>

<script setup lang="ts">
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";

</script>