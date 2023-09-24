import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  componentsMargin: [],
};

const combineSlice = createSlice({
  name: "combine",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const ne = action.payload;
    },
    // updateFormData: (state, action) => {
    //   const formData = { ...state.form };
    //   const { field_name, updated_styles } = action.payload;
    //   const fieldToUpdate = formData?.join?.find(
    //     (field) => field.name === field_name
    //   );
    //   if (fieldToUpdate) {
    //     fieldToUpdate.styles = updated_styles;
    //   }
    //   state.form = formData;
    // },
  },
});

export const { setFormData } = combineSlice.actions;
export default combineSlice.reducer;
