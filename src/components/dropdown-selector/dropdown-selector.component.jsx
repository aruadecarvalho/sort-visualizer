import { useState } from "react";
import {
  InputWraper,
  DropdownWraper,
  DropdownSelection,
  DropdownItemsContainer,
  DropDownButton,
  DropdownItem,
} from "./dropdown-selector.styles";

function DropDownSelector({ data, text, setAlgorithm }) {
  const [dropdownShow, setDropdownShow] = useState(false);
  const [dataSelected, setDataSelected] = useState(text);

  const toggleDropDown = () => {
    setDropdownShow(!dropdownShow);
  };
  const setDataSelectedValue = (value) => {
    setDataSelected(value);
    setAlgorithm(value);
    setDropdownShow(false);
  };
  return (
    <InputWraper>
      <DropdownWraper onClick={toggleDropDown}>
        <DropdownSelection>{dataSelected}</DropdownSelection>
        <DropDownButton open={dropdownShow} />
      </DropdownWraper>
      <DropdownItemsContainer open={dropdownShow}>
        {data.map((value, key) => (
          <DropdownItem key={key} onClick={() => setDataSelectedValue(value)}>
            {value}
          </DropdownItem>
        ))}
      </DropdownItemsContainer>
    </InputWraper>
  );
}

export default DropDownSelector;
