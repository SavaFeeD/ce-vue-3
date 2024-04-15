<script setup lang="ts">
interface IProps {
  options?: {
    order: number,
    size?: number,
  },
}
const props = defineProps<IProps>();
</script>

<template>
  <div class="color-picker">
    <label :for="'color-picker'  + order">Color Picker</label>
    <input type="color" :name="'color-picker'" id="color-picker-" + order>
  </div>
</template>