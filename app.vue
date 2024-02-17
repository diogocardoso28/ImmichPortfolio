<template>
  <div v-if="pending">Loading</div>
  <div v-else>
    <img :src="`/api/image/${image}`" alt="" srcset="" v-for="image in images">
    {{ images }}
  </div>
</template>
<script setup lang="ts">


const {data: images, pending, error, refresh} = await useFetch('/api/images')

</script>