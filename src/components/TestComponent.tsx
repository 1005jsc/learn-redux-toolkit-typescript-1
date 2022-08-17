import { useEffect } from 'react';
import { counterActions } from '../modules/counter';
import { todosActions } from '../modules/todos';
import { useAppDispatch, useAppSelector } from '../store';

export const TestComponent = () => {
  const { number, diff } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(counterActions.setDiff(2));
    console.log();
    dispatch(counterActions.increase(1));
    // dispatch(counterActions.increase());
    // 여기 왜 ????

    dispatch(todosActions.addTodo('hello'));
  }, []);
  return <></>;
};
