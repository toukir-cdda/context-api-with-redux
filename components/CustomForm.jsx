"use client";
import React, { useContext, useEffect, useState } from "react";
import InputField from "./InputField";
import { CombineValueContext } from "@/context/combineValue.context";

const CustomForm = (props) => {
  const { state, dispatch } = useContext(CombineValueContext);
  const { componentsMargin } = state || {};
  const [value, setValue] = useState(0);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch({
      type: "ADD_MARGIN",
      payload: { component: props.title, margin: value },
    });
  }, [value]);

  let updatedVal = 0;

  componentsMargin.map((item) => {
    if (item.component === props.title) {
      updatedVal = item.margin;
    }
  });

  return (
    <form className="flex justify-between flex-col items-center">
      <h1>{props?.title}</h1>
      <InputField
        label="Margin :"
        placeholder="0"
        type="number"
        onChange={handleChange}
        value={updatedVal}
      />
    </form>
  );
};

export default CustomForm;
