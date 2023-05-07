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
  let [calc, setCalc] = useState({ num: 0, res: 0, sign: "" });
  const handleClick = (value) => {
    // if (!calc.sign && calc.num) {
    //   setCalc({ ...calc, num: value });
    // }

    setCalc({
      ...calc,
      num: Number(String(calc.num) + String(value)),
    });

    // setScreenValue(calc.num);
  };

  const resetClickHandler = () => {
    setCalc({ ...calc, num: 0, sign: "", res: 0 });
    // setScreenValue(0);
  };

  const signClickHandler = (value) => {
    setCalc({ ...calc, sign: value, num: 0, res: calc.num });
    // setScreenValue(calc.sign);
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        num:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : math(Number(calc.res), Number(calc.num), calc.sign),
        sign: "",
        res: 0,
      });
      // setScreenValue(calc.num);
    }
  };

  const invertClickHandler = () => {
    setCalc({ ...calc, num: calc.num * -1 });
  };

  const percentClickHandler = () => {
    setCalc({ ...calc, num: calc.num / 100 });
  };

  const commaClickHandler = () => {
    if (!String(calc.num).includes(".")) {
      setCalc({ ...calc, num: String(calc.num) + "." });
    }
  };

  return (
    <>
      <Wrapper>
        <Screen value={calc.num} />
        <ButtonBox>
          {buttons.flat().map((btn, index) => {
            return (
              <Button
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  btn === "C"
                    ? resetClickHandler()
                    : btn === "+-"
                    ? invertClickHandler()
                    : btn === "%"
                    ? percentClickHandler()
                    : btn === "="
                    ? equalsClickHandler()
                    : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                    ? signClickHandler(btn)
                    : btn === "."
                    ? commaClickHandler()
                    : handleClick(btn);
                }}
                key={index}
              />
            );
          })}
        </ButtonBox>
      </Wrapper>
    </>
  );
}

export default App;
