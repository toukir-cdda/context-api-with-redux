"use client";
import React from "react";
import { useSelector } from "react-redux";

const ReduxTestcomp = () => {
  const test = useSelector((state) => state.combine);
  console.log(test);
  return <div>ReduxTestcomp</div>;
};

export default ReduxTestcomp;
