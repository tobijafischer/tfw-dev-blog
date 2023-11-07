<template>
  <main>
    <ContentDoc>
    <template #not-found>
      <section>
        <h1>404</h1>
        <p>Looks like we got lost. Return to <NuxtLink to="/">home</NuxtLink></p>
      </section>
    </template>
    </ContentDoc>
  </main>
</template>

<style scoped>
section {
  min-height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* section {
  background-image: var(--main-gradient-oklab);
  background-image: 
    linear-gradient(
      225deg in oklab, 
      #172C33 0%, #FDF0D5 100%
    );
  background-image: linear-gradient(
    225deg in oklab, 
    #172C33 0%, #E43955 100%
  );
} */
</style>