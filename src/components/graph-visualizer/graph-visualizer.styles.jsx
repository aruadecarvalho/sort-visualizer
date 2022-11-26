import styled from "styled-components";

export const colorArray = [
  "#063943",
  "#074450",
  "#0a4f5c",
  "#08505d",
  "#095b6a",
  "#0c5a68",
  "#0e6574",
  "#2a636e",
  "#30727e",
  "#0a6778",
  "#106f80",
  "#0b7285",
  "#238091",
  "#36808d",
  "#3d8e9b",
  "#4a8e9e",
  "#5a8fa3",
  "#6a8fa8",
  "#5099a7",
  "#63a5b1",
  "#549caa",
  "#6daab6",
  "#77b0ba",
  "#85b9c2",
  "#9dc8ce",
];

export const GraphVisualizerContainer = styled.div`
  height: 100vh;
  max-width: 90rem;
  padding-top: 5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 5rem;
  @media (max-width: 900px) {
    padding-right: 5rem;
    padding-left: 5rem;
  }
`;

export const Graph = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1;
  gap: ${(props) => props.graphGap}rem;
  height: 15rem;
`;

export const SelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 21rem;
  height: 4rem;
  color: ${(props) => (props.inverted ? "#fff" : "#757575")};
  font-size: 1.5rem;
  background-color: ${(props) => (props.inverted ? "#757575" : "#fff")};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 0px rgb(0, 0, 0, 0.2);
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.inverted ? "#fff" : "#757575")};
    color: ${(props) => (props.inverted ? "#757575" : "#fff")};
  }
`;

export const GraphBar = styled.div.attrs((props) => ({
  style: {
    height: `${props.barValue}`,
    width: `${props.barWidth}`,
    backgroundColor: `${colorArray[props.color]}`,
  },
}))`
  bottom: 0;
  transition: all 0.5s;
`;
