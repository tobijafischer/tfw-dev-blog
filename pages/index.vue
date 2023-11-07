<template>
  <div>
    <AppHeader />
    <main>
      <ul v-if="data" role="list">
        <li v-for="post in data">
          <NuxtLink :to="`${post._path}`">
            <p>{{ post.published_at }}</p>
            <h3>{{ post.title }}</h3>
          </NuxtLink>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('bloglist', () => queryContent('/blog').find())
</script>

<style scoped>
  main {
    margin-top: 40vh;
    padding: 2rem;
  }
  ul a {
    color: var(--main-color);
    transition: color .3s ease-in-out;
  }
  ul a:hover {
    color: var(--main-accent);
  }
  li {
    text-align: center;
    margin-bottom: 3rem;
    padding: 0em 2.25%;
    transition: padding .3s ease-in-out;
  }
  li:hover {
    padding: 0em 0%;
  }
  li:hover h3 {
    font-weight: 600;
  }
</style>