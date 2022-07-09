import { createApp } from "vue";
// @ts-ignore
import App from "./App.vue";
import router from "./router";
// css and scss
import "./scss/vender/all.min.css";
import "./scss/vender/normalize.css";
import "./scss/main.scss";

createApp(App).use(router).mount("#app");
