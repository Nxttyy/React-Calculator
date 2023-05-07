import Wrapper from "./components/Wrapper.tsx";
import Screen from "./components/Screen.tsx";
import ButtonBox from "./components/ButtonBox.tsx";
import Button from "./components/Button.tsx";
import "./App.css";
import { useState } from "react";

function App() {
  const buttons = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  let [screenValue, setScreenValue] = useState(0);
  const handleClick = (value) => {
    setScreenValue(value);
  };

  return (
    <>
      <Wrapper>
        <Screen value={screenValue} />
        <ButtonBox>
          {buttons.flat().map((button) => {
            return (
              <Button
                className={button === "=" ? "equals" : ""}
                value={button}
                onClick={() => {
                  handleClick(button);
                }}
              />
            );
          })}
        </ButtonBox>
      </Wrapper>
    </>
  );
}

export default App;
