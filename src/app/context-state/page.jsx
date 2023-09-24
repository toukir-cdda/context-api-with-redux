"use client";
import { CombineValueProvider } from "@/context/combineValue.context";
import React from "react";
import ContextComponent from "../../../components/ContextComponent";

const Page = () => {
  return (
    <CombineValueProvider>
      <ContextComponent />
    </CombineValueProvider>
  );
};

export default Page;
