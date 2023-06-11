import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="block px-4 py-3 border-b border-slate-300">
      <input
        className="peer w-full outline-0"
        {...inputProps}
        required
        onChange={onChange}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <p className="errorMessage text-xs text-red-600">
        &#8251;&nbsp;{errorMessage}
      </p>
    </div>
  );
};

export default FormInput;
