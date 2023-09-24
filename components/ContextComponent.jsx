import { CombineValueContext } from "@/context/combineValue.context";
import React, { useContext } from "react";
import CustomForm from "./CustomForm";

const ContextComponent = () => {
  const { dispatch } = useContext(CombineValueContext);
  return (
    <div className="flex  gap-5 justify-center items-center">
      <div>
        <CustomForm title="Component 1" />
      </div>
      <div>
        <CustomForm title="Component 2" />
      </div>
      <div>
        <CustomForm title="Component 3" />
      </div>
      <div>
        <CustomForm title="Component 4" />
      </div>
      <div>
        <CustomForm title="Component 5" />
      </div>
      <div>
        <CustomForm title="Component 6" />
      </div>

      <button
        type="submit"
        style={{
          background: "lightblue",
          padding: "7px 15px",
          borderRadius: "8px",
        }}
        onClick={() =>
          dispatch({
            type: "COMBINE_MARGIN",
          })
        }
      >
        Link
      </button>
    </div>
  );
};

export default ContextComponent;
