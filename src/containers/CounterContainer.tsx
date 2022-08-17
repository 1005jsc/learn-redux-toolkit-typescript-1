import { shallowEqual } from 'react-redux';
import Counter from '../components/Counter';
import { counterActions } from '../modules/counter';
import { useAppDispatch, useAppSelector } from '../store';
function CounterContainer() {
  // provider에 감싸진 곳에서 state를 조회할 수 있음
  // ()안에 객체를 어떻게 만들고 싶은가 만들어 주면 됨
  // 보통 index.js를 보면서 만들면 됨

  const { number, diff } = useAppSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
  );

  const { setDiff, increase, decrease } = counterActions;
  // dispatch를 쓰려면 useDispatch를 실행해서 써야됨
  const dispatch = useAppDispatch();

  const onIncrease = () => {
    dispatch(counterActions.increase(1));
  };
  const onDecrease = () => {
    dispatch(counterActions.decrease(1));
  };
  const onSetDiff = (diff: number) => {
    dispatch(counterActions.setDiff(diff));
  };

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
