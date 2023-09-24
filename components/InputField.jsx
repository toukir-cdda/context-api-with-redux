import React from "react";

const InputField = (props) => {
  return (
    <div>
      <label
        style={{
          marginRight: "10px",
        }}
        htmlFor={props?.name}
      >
        {props?.label}
      </label>
      <input
        style={{
          border: "1px solid gray",
          height: "40px",
          width: "40px",
          borderRadius: "8px",
        }}
        id={props?.name}
        {...props}
      />
    </div>
  );
};

export default InputField;
