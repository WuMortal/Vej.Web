import { createApp } from "vue";
import {
  Avatar,
  Button,
  Cell,
  CellGroup,
  Form,
  FormItem,
  Icon,
  List,
  Toast,
} from "@nutui/nutui-taro";

import "./app.scss";

const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(Form)
  .use(FormItem)
  .use(Cell)
  .use(CellGroup)
  .use(Button)
  .use(Toast)
  .use(Avatar)
  .use(List)
  .use(Icon);

export default App;
