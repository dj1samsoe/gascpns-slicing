/* eslint-disable vue/multi-word-component-names */
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import VCalendar from "v-calendar";
import "v-calendar/style.css";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import store from "./store";

const app = createApp(App);
// app.use(VCalendar, {});
app.use(router);
app.component("QuillEditor", QuillEditor);
app.use(store);
app.mount("#app");
