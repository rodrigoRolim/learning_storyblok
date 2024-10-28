<script setup>
defineProps({
  blok: {
    type: Object,
  }
})
</script>

<template>
  <div class="container projec-page">
    <div class="project-title">
      <h1>{{ blok.name || "New Project" }}</h1>
      <NuxtLink :to="{ name: 'index' }">Go Back</NuxtLink>
    </div>

    <div class="project-description">
      <img :src="blok.image?.filename || 'https://picsum.photos/300/175'" :alt="blok.image?.alt" />
      <p>{{ blok.description || "lorem ipsum text" }}</p>
    </div>
  </div>
</template>
