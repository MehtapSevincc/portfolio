import 'vue-toast-notification/dist/theme-bootstrap.css';
import { createApp } from "vue";
import ToastPlugin from 'vue-toast-notification';
import App from "./App.vue";
import "./assets/base.css";
import VueScrollTo from "vue-scrollto";
const app = createApp(App);

app.use(VueScrollTo);
app.use(ToastPlugin, {
    position: "bottom-right",
    duration :4000,
});

app.mount("#app");
