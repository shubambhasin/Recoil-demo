import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const textState = atom({
  key: "textState",
  default: ""
});

const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  }
});

export const CharacterCounter = () => {
  return (
    <div>
      <h1>Character Counter</h1>
      <TextInput />
      <CharacterCount />
    </div>
  );
};

export const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  console.log(text);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </div>
      <button onClick={() => setText("12341")}>Update</button>
    </div>
  );
};

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
