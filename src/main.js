import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./common/styles/main.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
