import MyComponent from "./components/MyComponent";
import { withTodo } from "./utils/withTodo";

const MyComponentWrapper = withTodo(MyComponent, '1')
const App = () => {


  return (
    <div>
      <MyComponentWrapper />
    </div>
  );
};

export default App;
