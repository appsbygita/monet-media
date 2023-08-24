import { useState } from "react";
import { CheckboxWrapper } from "./checkbox.styles";

const Checkbox = ({ label, checked, ...props }) => {
  //   const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckboxWrapper>
      {/* <label> */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        className={isChecked ? "checked" : ""}
        required="required"
        {...props}
      />
      <div>{label}</div>
      {/* </label> */}
    </CheckboxWrapper>
  );
};
export default Checkbox;
