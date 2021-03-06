import { createApp } from "vue";
import {
  Avatar,
  Button,
  Cell,
  CellGroup,
  DatePicker,
  Elevator,
  Form,
  FormItem,
  Grid,
  GridItem,
  Icon,
  InfiniteLoading,
  List,
  OverLay,
  Picker,
  Popup,
  SearchBar,
  Tag,
  Toast,
} from "@nutui/nutui-taro";

import "./app.scss";
import "./assets/font/iconfont.css";

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
  .use(Icon)
  .use(DatePicker)
  .use(Picker)
  .use(Popup)
  .use(Grid)
  .use(GridItem)
  .use(InfiniteLoading)
  .use(Tag)
  .use(OverLay)
  .use(Elevator)
  .use(SearchBar);
export default App;
