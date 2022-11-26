import styled from "styled-components";

export const InputWraper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  width: 21rem;
  min-height: 4rem;
  box-shadow: 0px 2px 5px 0px rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0 1rem;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const DropdownWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const DropdownSelection = styled.div`
  color: #757575;
  font-size: 1.5rem;
`;

export const DropdownItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: ${(props) => (props.open ? "5px" : "-5px")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  height: ${(props) => (props.open ? "16rem" : "0px")};
  top: 4rem;
  left: 0;
  width: 100%;
  background-color: #fff;
  transition: all 0.3s;
  overflow-y: scroll;
  box-shadow: 0px 2px 5px 0px rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #757575;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const DropdownItem = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.4rem 1rem;
  font-size: 1.6rem;
  border-bottom: 1px solid rgb(117, 117, 117, 0.1);
  transition: all 0.15s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 0px rgb(0, 0, 0, 0.1);
    background-color: #3240ed;
    color: #fff;
  }
`;

export const DropDownButton = styled.div`
  width: 1.3rem;
  height: 1.2rem;
  background-color: #757575;
  clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
  transform: translateY(2.5px);
  rotate: ${(props) => (props.open ? "180deg" : "0deg")};
  transition: all 0.3s;
`;
