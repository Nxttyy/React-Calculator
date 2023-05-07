import Wrapper from "./components/Wrapper.tsx";
import Screen from "./components/Screen.tsx";
import ButtonBox from "./components/ButtonBox.tsx";
import Button from "./components/Button.tsx";

function App() {
  const buttons = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  return (
    <>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {buttons.flat().map((button) => {
            return (
              <Button
                className="button"
                value={button}
                onClick={() => {
                  console.log("Clicked");
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
