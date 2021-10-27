<script setup>
const props = defineProps({
  city: {
    type: String,
    default: 'Amsterdam',
  },
})
</script>

<template>
  <div>Hello {{ props.city }}</div>
</template>
