<template>
  <lenis
      :options="{offset: 100}"
      @initiated="lenisInitiated"
      @scroll="onLenisScroll"
   >
      <NuxtPage />
   </lenis>
</template>
<script setup lang="ts">
  function lenisInitiated() {
    console.log('Lenis was initiated');
  }
  function onLenisScroll(event: any) {
    // console.log({event});
    console.log('scrolling...');
  }
</script>