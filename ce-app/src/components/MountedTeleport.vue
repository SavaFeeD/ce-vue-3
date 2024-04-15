<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';

interface IProps {
  to: string,
  isMounted: boolean,
}
defineProps<IProps>();
</script>

<template>
  <Teleport :to="to" v-if="isMounted">
    <slot></slot>
  </Teleport>
</template>