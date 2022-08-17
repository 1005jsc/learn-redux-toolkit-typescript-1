import React, { useCallback } from 'react';
import Todos from '../components/Todos';
import { todosActions } from '../modules/todos';
import { useAppDispatch, useAppSelector } from '../store';

function TodosContainer() {
  // useSelector 에서 꼭 객체를 반환 할 필요는 없습니다.
  // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됩니다.

  const { todos } = useAppSelector((state) => ({ todos: state.todos }));
  const dispatch = useAppDispatch();
  const { addTodo, toggleTodo } = todosActions;

  const onCreate = useCallback(
    (text: string) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );
  const onToggle = useCallback(
    (id: number) => {
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
