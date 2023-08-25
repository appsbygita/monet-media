import { useState } from "react";
import { CheckboxWrapper } from "./checkbox.styles";

const Checkbox = ({ label, checked, ...props }) => {
  //   const defaultChecked = checked ? checked : false;
  // const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckboxWrapper>
      {/* <label> */}
      <input
        {...props}
        type="checkbox"
        // checked={checked}
        // onChange={onChange} //{() => setIsChecked((prev) => !prev)}
        className={checked ? "checked" : ""}
        required="required"
      />
      <div>{label}</div>
      {/* </label> */}
    </CheckboxWrapper>
  );
};
export default Checkbox;
