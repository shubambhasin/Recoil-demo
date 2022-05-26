import { RecoilRoot } from "recoil";
import { CharacterCounter } from "./CharacterCounter";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <CharacterCounter />
      </div>
    </RecoilRoot>
  );
}
