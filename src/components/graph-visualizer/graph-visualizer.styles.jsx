import styled from "styled-components";

export const GraphVisualizerContainer = styled.div`
  height: 100vh;
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 5rem;
`;

export const Graph = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1;
  gap: ${(props) => props.graphGap}rem;
  height: 15rem;
`;

export const GraphBar = styled.div`
  height: ${(props) => props.barValue};
  width: ${(props) => props.barWidth};
  background-color: red;
  transition: all 0.5s;
  bottom: 0;
  transition: all 0.5s;
  background-color: ${(props) => props.color};
`;
