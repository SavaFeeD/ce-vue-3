import App from './App.vue';
import { defineCustomElement } from 'vue';

const app = defineCustomElement(App);

const widgetsModules = import.meta.glob('./components/widgets/*.vue');
let widgetsList = [];

for (const path in widgetsModules) {
  await widgetsModules[path]().then((mod) => {
    widgetsList.push(mod.default.__name);
  });
}

window.widgetsList = widgetsList;
window.customElements.define('alchemyth-flask', app);