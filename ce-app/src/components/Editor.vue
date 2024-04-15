<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
import { IConfig, IWidget } from '../core/config';

interface IProps {
  config: IConfig | null,
}
const props = defineProps<IProps>();

const teleportRun: Ref<boolean> = ref(false);

const title = import.meta.env.VITE_APP_TITLE;

</script>

<template>
  <div class="header">
    <h2 class="editor__title">{{ title }}</h2>
    <code>
      <pre>{{ config }}</pre>
    </code>
  </div>
  <div class="editor">
    <!-- <template
      v-if="teleportRun"
      v-for="(widget, widgetOrder) in config.widgets"
      :key="`widget-${widget}-${widgetOrder}`"
    >
      <teleport :to="`#widget-${widget.position}`">
        <ColorPicker :options="{ order: widgetOrder }" />
      </teleport>
    </template> -->
    <button @click="() => teleportRun = true">CLICK</button>

    <MountedTeleport to=".left" :isMounted="teleportRun">
      <ColorPicker :options="{ order: 1 }" />
    </MountedTeleport>

    <section class="left">
      <div id="widget-left"></div>
    </section>
    <section class="right">
      <div id="widget-right"></div>
    </section>
    <section class="top">
      <div id="widget-top"></div>
    </section>
    <section class="bottom">
      <div id="widget-bottom"></div>
    </section>
  </div>
</template>