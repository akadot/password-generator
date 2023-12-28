<script lang="ts" setup>
import Generator from './components/Generator.vue';
</script>

<template>
  <section class="container">
    <section class="content">
      <h1>dotpass</h1>
      <h2>Keep safe.</h2>
      <p>No more creating and memorizing passwords. Access all your accounts with just a few clicks, in the palm of your hand.</p>
      <p>Feel free to test our passwords below, or create your account to have access to all features.</p>
      <button>Create your account &nbsp; &rarr;</button>
    </section>
    <Generator/>
  </section>
</template>

<style scoped>
.container{
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  column-gap: 1rem;
}

.content{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  word-wrap: break-word;
  width: 40%;
}

h1{
  color: var(--fg);
  font-weight: 900;
  font-size: 2.5rem;
}

h2{
  font-weight: 500;
  color: var(--main);
  font-size: 1rem;
  padding-bottom: 1rem;
}

p{
  padding: 0.3rem 0;
  font-family: 'Lexend', sans-serif;
}

</style>
