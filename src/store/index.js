// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

// As we made new slice using redux-toolkit we don't need this previous code
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);
// configuring store for the reducer functions which we made using redux-toolkit
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
