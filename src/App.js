import { RecoilRoot } from "recoil";
import "./styles.css";
import { TodoList } from "./TodoList";

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoList />
      </div>
    </RecoilRoot>
  );
}
