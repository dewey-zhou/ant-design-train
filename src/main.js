import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
// import Anted from "ant-design-vue";
// import Button from "ant-design-vue/lib/button";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Input,
  Form,
  Select
} from "ant-design-vue";
// import "ant-design-vue/dist/antd.less";
// import "ant-design-vue/lib/button/style";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Input);
Vue.use(Form);
Vue.use(Select);

Vue.use(Auth);
Vue.component("Authorized", Authorized);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2239672_cis0c312yq5.js"
});
Vue.component("IconFont", IconFont);

// Vue.use(Anted);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
