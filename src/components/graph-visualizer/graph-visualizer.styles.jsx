import styled from "styled-components";

export const GraphVisualizerContainer = styled.div`
  height: 100vh;
  width: 90rem;
  margin: 0 auto;
  position: relative;
`;

export const Graph = styled.div`
  gap: 5rem;
`;

export const GraphBar = styled.div`
  height: ${(props) => props.barValue};
  width: 10rem;
  background-color: red;
  z-index: ${(props) => props.barZIndex};
  transition: all 0.5s;
  position: absolute;
  right: ${(props) => props.barPosition};
  bottom: 0;
  transition: all 0.5s;
  background: ${(props) => props.color};
`;
