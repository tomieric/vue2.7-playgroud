<template>
  <div class="flex justify-between pl-3 mb-4">
    <span>{{ name }}</span>
    <button
      class="border rounded-md py-1 px-3 text-sm text-grey-700 select-none"
      @click="$emit('confirm')"
    >{{ btn }}</button>
  </div>
</template>

<script setup>
defineEmits(['confirm'])

defineProps({
  name: {
    type: String,
    default: ''
  },

  btn: {
    type: String,
    default: 'Done'
  }
})
</script>