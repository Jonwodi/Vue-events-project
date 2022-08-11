import { createApp, provide, reactive } from "vue";
import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";
import "./index.css";

const app = createApp(App);
const GStore = reactive({
  flashMessage: "",
});

app.use(router);
app.provide("GStore", GStore);
app.mount("#app");
