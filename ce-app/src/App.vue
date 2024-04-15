<script setup lang="ts">
import { ref, Ref } from 'vue';
import { IConfig, IWidget } from './core/config';
import { WidgetExist } from './utils/func';

interface IProps {
  styleLink?: string,
  config?: string,
}
const props = defineProps<IProps>();

let widgetsList: string[] | undefined = window['widgetsList'];

const preformedConfig: Ref<IConfig | null> = ref(null);

if (!!props.config) {
  let config: string = '';

  if (props.config.startsWith('http:') || props.config.startsWith('https:')) {
    fetch(props.config)
      .then((response) => response.json())
      .then((json) => config = json);
  } else {
    config = props.config;
  }
  
  let editableConfig: IConfig = JSON.parse(config) as IConfig;
  
  if (editableConfig?.widgets && widgetsList) {
    editableConfig.widgets = editableConfig.widgets.filter((widget) => WidgetExist(widgetsList, widget.name)) as IWidget[];
  }

  preformedConfig.value = editableConfig;
}
</script>

<template>
  <link v-if="styleLink" rel="stylesheet" :href="styleLink">
  <Editor :config="preformedConfig" />
  <div class="modals" id="modals"></div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Iceland';
  src: local('Iceland'), url(./assets/Iceland-Regular.ttf) format('truetype');
}

* {
  font-family: 'Iceland';
}
</style>
