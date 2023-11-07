
import { Header } from '#build/components';
<template>
  <header :class="y > 175 ? 'fixed' : ''">
    <h1><span class="name first">Tobija</span><span class="claim active-grotesk">Concept. Design. Code.</span><span class="name last">Fischer</span></h1>
    <!-- <span class="spacer">&nbsp;</span> -->
    <!-- <h2 class="active-grotesk">A micro blog for web based insights</h2> -->
    <h2 class="active-grotesk">Silently documenting random bits of my web development journey.</h2>
  </header>
</template>

<script setup lang="ts">
  const { y } = useWindowScroll();
</script>

<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    text-align: center;
    margin-bottom: 20vh;
    padding: 1rem;
    background: var(--main-bg);
  }
  h1 {
    transition: font-size .3s ease-in-out;
    margin-bottom: 1rem;
  }
  header.fixed h1 {
    font-size: 2rem;
  }
  h1 span {
    display: inline-block;
    transition: all .3s ease-in-out;
  }
  span.claim {
    opacity: 0;
    font-size: 16px;
    width: 30px;
    white-space: nowrap;
    transition: all .3s ease-in-out;
  }
  h1:hover span.claim {
    opacity: 1;
    width: 200px;
  }
</style>