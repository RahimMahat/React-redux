import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  // A hook to access the redux dispatch function.
  const dispatch = useDispatch();

  // A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // this dispatch is for the previous reduces funciton
    // dispatch({ type: "increment" });
    // this dispatch is for new reducer which we made using redux-toolkit
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    // this dispatch is for the previous reduces funciton
    // dispatch({ type: "increase", amount: 7});
    // this dispatch is for new reducer which we made using redux-toolkit
    dispatch(counterActions.increase(7));
  };
  const decrementHandler = () => {
    // this dispatch is for the previous reduces funciton
    // dispatch({ type: "decrement" });
    // this dispatch is for new reducer which we made using redux-toolkit
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // this dispatch is for the previous reduces funciton
    // dispatch({ type: "toggle" });
    // this dispatch is for new reducer which we made using redux-toolkit
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      {show && (
        <div>
          <button onClick={decrementHandler}>decrement</button>
          <button onClick={increaseHandler}>Increment by 7</button>
          <button onClick={incrementHandler}>Increment</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
