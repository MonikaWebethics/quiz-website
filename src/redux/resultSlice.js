import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subject: "",
  answers: {},
};
const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setSubject: (state, action) => {
      state.subject = action.payload;
    },
    storeAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
  },
});

export const { setSubject, storeAnswer } = resultSlice.actions;
export default resultSlice.reducer;
